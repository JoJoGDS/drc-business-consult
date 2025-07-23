"use client";
import { useState } from "react";

type TranslationDocument = {
  type: string;
  otherType?: string;
  sourceLanguage: string;
  targetLanguage: string;
  needsLegalization: boolean;
};

type AdministrativeAssistance = {
  appointment: boolean;
  legalDossier: boolean;
  counterAssistance: boolean;
  details: string;
};

type LocalGuide = {
  duration: string;
  language: string;
  locations: string;
  culturalAssistance: boolean;
  localContacts: boolean;
  fieldMission: boolean;
};

export default function ReservationForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'translation' | 'assistance' | 'guide'>('translation');
  
  // Translation state
  const [documents, setDocuments] = useState<TranslationDocument[]>([]);
  const [currentDoc, setCurrentDoc] = useState<TranslationDocument>({
    type: 'Contrat / Accord',
    sourceLanguage: 'Français',
    targetLanguage: 'Anglais',
    needsLegalization: false
  });
  
  // Administrative Assistance state
  const [assistance, setAssistance] = useState<AdministrativeAssistance>({
    appointment: false,
    legalDossier: false,
    counterAssistance: false,
    details: ''
  });
  
  // Local Guide state
  const [guide, setGuide] = useState<LocalGuide>({
    duration: 'demi-journée',
    language: 'Français',
    locations: '',
    culturalAssistance: false,
    localContacts: false,
    fieldMission: false
  });
  
  // Personal info
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });

  const documentTypes = [
    'Contrat / Accord',
    'Pièce d\'identité',
    'Documents juridiques / notariés',
    'Documents fiscaux / administratifs',
    'Correspondance professionnelle',
    'Autre'
  ];
  
  const languages = ['Français', 'Anglais', 'Swahili', 'Autre'];
  
  const handleAddDocument = () => {
    setDocuments([...documents, currentDoc]);
    setCurrentDoc({
      type: 'Contrat / Accord',
      sourceLanguage: 'Français',
      targetLanguage: 'Anglais',
      needsLegalization: false
    });
  };
  
  const handleRemoveDocument = (index: number) => {
    const newDocs = [...documents];
    newDocs.splice(index, 1);
    setDocuments(newDocs);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = {
      personalInfo,
      translation: documents.length > 0 ? { documents } : null,
      assistance: assistance.appointment || assistance.legalDossier || assistance.counterAssistance ? assistance : null,
      guide: guide.duration || guide.language || guide.locations ? guide : null,
      timestamp: new Date().toISOString()
    };
    
    // Prepare data for Django API
    const reservationData = {
      name: personalInfo.name,
      email: personalInfo.email,
      phone: personalInfo.phone,
      service: activeTab, // translation, assistance, or guide
      message: JSON.stringify(formData) // Store all form data as JSON in the message field
    };
    
    try {
      // Import the Django client
      const { createReservation } = await import('../lib/django/client');
      
      // Create reservation using Django API
      const result = await createReservation(reservationData);
      
      if (result) {
        setSuccess(true);
        // Reset form
        setDocuments([]);
        setAssistance({
          appointment: false,
          legalDossier: false,
          counterAssistance: false,
          details: ''
        });
        setGuide({
          duration: 'demi-journée',
          language: 'Français',
          locations: '',
          culturalAssistance: false,
          localContacts: false,
          fieldMission: false
        });
        setPersonalInfo({
          name: '',
          email: '',
          phone: '',
          company: '',
          notes: ''
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      alert("Une erreur est survenue. Veuillez réessayer.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-[#F05E0E] to-[#FFA500] p-6 text-white">
        <h2 className="text-2xl font-bold">Formulaire de Réservation</h2>
        <p className="mt-2 opacity-90">Parce que comprendre, se faire comprendre et s'orienter est essentiel pour réussir son séjour.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-8">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Informations Personnelles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom Complet *</label>
              <input
                type="text"
                required
                value={personalInfo.name}
                onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                required
                value={personalInfo.email}
                onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
              <input
                type="tel"
                required
                value={personalInfo.phone}
                onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Entreprise/Organisation</label>
              <input
                type="text"
                value={personalInfo.company}
                onChange={(e) => setPersonalInfo({...personalInfo, company: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Services Tabs */}
        <div className="space-y-4">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                type="button"
                onClick={() => setActiveTab('translation')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'translation' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Traduction Officielle
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('assistance')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'assistance' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Assistance Administrative
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('guide')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'guide' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Guide Local
              </button>
            </nav>
          </div>

          {/* Translation Tab */}
          {activeTab === 'translation' && (
            <div className="space-y-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">1. Traduction officielle de documents</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Documents à traduire</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {documentTypes.map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="documentType"
                          checked={currentDoc.type === type}
                          onChange={() => setCurrentDoc({...currentDoc, type})}
                          className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
                        />
                        <span className="text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                  {currentDoc.type === 'Autre' && (
                    <div className="mt-2">
                      <input
                        type="text"
                        value={currentDoc.otherType || ''}
                        onChange={(e) => setCurrentDoc({...currentDoc, otherType: e.target.value})}
                        placeholder="Précisez le type de document"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Langue source</label>
                    <select
                      value={currentDoc.sourceLanguage}
                      onChange={(e) => setCurrentDoc({...currentDoc, sourceLanguage: e.target.value})}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                    >
                      {languages.map((lang) => (
                        <option key={`source-${lang}`} value={lang}>{lang}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Langue cible</label>
                    <select
                      value={currentDoc.targetLanguage}
                      onChange={(e) => setCurrentDoc({...currentDoc, targetLanguage: e.target.value})}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                    >
                      {languages.map((lang) => (
                        <option key={`target-${lang}`} value={lang}>{lang}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="needsLegalization"
                    checked={currentDoc.needsLegalization}
                    onChange={(e) => setCurrentDoc({...currentDoc, needsLegalization: e.target.checked})}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="needsLegalization" className="ml-2 block text-sm text-gray-700">
                    Besoin de légalisation / certification officielle
                  </label>
                </div>

                <button
                  type="button"
                  onClick={handleAddDocument}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Ajouter ce document
                </button>

                {documents.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Documents ajoutés :</h4>
                    <ul className="border rounded-md divide-y divide-gray-200">
                      {documents.map((doc, index) => (
                        <li key={index} className="px-4 py-2 flex justify-between items-center">
                          <div>
                            <span className="font-medium">{doc.type === 'Autre' ? doc.otherType : doc.type}</span>
                            <span className="text-sm text-gray-500 ml-2">({doc.sourceLanguage} → {doc.targetLanguage})</span>
                            {doc.needsLegalization && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                Certification requise
                              </span>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveDocument(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <span className="sr-only">Supprimer</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Administrative Assistance Tab */}
          {activeTab === 'assistance' && (
            <div className="space-y-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">2. Assistance administrative</h3>
              <p className="text-sm text-gray-600">Nous vous accompagnons dans toutes vos démarches :</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="appointment"
                      type="checkbox"
                      checked={assistance.appointment}
                      onChange={(e) => setAssistance({...assistance, appointment: e.target.checked})}
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="appointment" className="font-medium text-gray-700">Prise de rendez-vous avec l'administration</label>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="legalDossier"
                      type="checkbox"
                      checked={assistance.legalDossier}
                      onChange={(e) => setAssistance({...assistance, legalDossier: e.target.checked})}
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="legalDossier" className="font-medium text-gray-700">Constitution de dossier juridique</label>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="counterAssistance"
                      type="checkbox"
                      checked={assistance.counterAssistance}
                      onChange={(e) => setAssistance({...assistance, counterAssistance: e.target.checked})}
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="counterAssistance" className="font-medium text-gray-700">Accompagnement aux guichets</label>
                  </div>
                </div>

                <div>
                  <label htmlFor="assistanceDetails" className="block text-sm font-medium text-gray-700 mb-1">Précisez votre demande :</label>
                  <textarea
                    id="assistanceDetails"
                    rows={4}
                    value={assistance.details}
                    onChange={(e) => setAssistance({...assistance, details: e.target.value})}
                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Décrivez en détail votre demande d'assistance..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Local Guide Tab */}
          {activeTab === 'guide' && (
            <div className="space-y-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">3. Guide local professionnel</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Durée</label>
                    <div className="mt-1 space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="duration"
                          value="demi-journée"
                          checked={guide.duration === 'demi-journée'}
                          onChange={() => setGuide({...guide, duration: 'demi-journée'})}
                          className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">Demi-journée</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="duration"
                          value="journée"
                          checked={guide.duration === 'journée'}
                          onChange={() => setGuide({...guide, duration: 'journée'})}
                          className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">Journée complète</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Langue souhaitée</label>
                    <select
                      value={guide.language}
                      onChange={(e) => setGuide({...guide, language: e.target.value})}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                    >
                      <option>Français</option>
                      <option>Anglais</option>
                      <option>Swahili</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="locations" className="block text-sm font-medium text-gray-700 mb-1">Lieux à visiter ou à couvrir :</label>
                  <textarea
                    id="locations"
                    rows={3}
                    value={guide.locations}
                    onChange={(e) => setGuide({...guide, locations: e.target.value})}
                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Veuillez indiquer les lieux que vous souhaitez visiter ou les zones à couvrir..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Services additionnels :</label>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="culturalAssistance"
                        type="checkbox"
                        checked={guide.culturalAssistance}
                        onChange={(e) => setGuide({...guide, culturalAssistance: e.target.checked})}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="culturalAssistance" className="text-gray-700">Assistance culturelle / protocolaire</label>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="localContacts"
                        type="checkbox"
                        checked={guide.localContacts}
                        onChange={(e) => setGuide({...guide, localContacts: e.target.checked})}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="localContacts" className="text-gray-700">Présentation aux contacts locaux / partenaires</label>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="fieldMission"
                        type="checkbox"
                        checked={guide.fieldMission}
                        onChange={(e) => setGuide({...guide, fieldMission: e.target.checked})}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="fieldMission" className="text-gray-700">Accompagnement lors de missions de terrain</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Notes supplémentaires</label>
          <textarea
            id="notes"
            rows={3}
            value={personalInfo.notes}
            onChange={(e) => setPersonalInfo({...personalInfo, notes: e.target.value})}
            className="shadow-sm focus:ring-orange-500 focus:border-orange-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            placeholder="Avez-vous des demandes particulières ou des informations complémentaires à nous communiquer ?"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#F05E0E] to-[#FFA500] hover:from-[#E0550D] hover:to-[#E69500] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </>
            ) : (
              'Soumettre ma demande de réservation'
            )}
          </button>
          
          <p className="mt-2 text-xs text-gray-500 text-center">
            Nous vous contacterons dans les plus brefs délais pour confirmer votre réservation.
          </p>
        </div>
      </form>
      
      {success && (
        <div className="bg-green-50 border-l-4 border-green-400 p-4 m-6 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">
                Votre demande de réservation a été envoyée avec succès ! Notre équipe vous contactera bientôt pour confirmer les détails.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
