import { createClient } from "@/lib/supabase/server";

export default async function FormsPage() {
    const supabase = createClient();

    const { data: forms, error } = await supabase.from('forms').select('*');

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Form Submissions</h1>
            <div className="bg-white shadow rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {forms.map((form) => (
                            <tr key={form.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{form.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{form.content}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}