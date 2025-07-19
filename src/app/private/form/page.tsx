'use client'

import { createClient } from "@/lib/supabase/client";

export default function FormPage() {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const supabase = createClient();

        const { error } = await supabase.from('forms').insert(data);

        if (error) {
            alert(error.message);
        } else {
            alert('Form submitted successfully!');
            e.currentTarget.reset();
        }
    }

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    name="name"
                    placeholder="Name"
                    required
                    className="border p-2 w-full rounded"
                />
                <textarea
                    name="content"
                    placeholder="Content"
                    required
                    className="border p-2 w-full rounded"
                />
                <button
                    type="submit"
                    className="bg-orange-500 text-white px-4 py-2 rounded w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
