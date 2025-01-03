import React, { useEffect, useState } from 'react';
import { Mail, FileText, Cpu, Shield } from 'lucide-react';

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
}

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:5000/contacts');
        const data: Contact[] = await response.json();
        setContacts(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error('Unknown error occurred');
        }
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f18] p-4 md:p-8 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg"></div>
      
      <div className="relative z-10">
        {/* Admin Header */}
        <header className="mb-8 text-center">
          <div className="inline-flex items-center justify-center space-x-2 mb-2">
            <Shield className="h-8 w-8 text-cyan-400" />
            <span className="text-sm text-cyan-400 uppercase tracking-widest">Admin Dashboard</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 glow uppercase tracking-widest flicker">
            Netrunner Messages
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <Cpu className="h-6 w-6 text-[#00ff9d]" />
            <span className="text-lg md:text-xl text-[#00ff9d] glow-green">System Online</span>
          </div>
        </header>

        {/* Messages Table */}
        <div className="cyberpunk-border rounded-lg overflow-hidden backdrop-blur-sm bg-[#0f172a]/80">
          <div className="overflow-auto max-h-[calc(100vh-200px)]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-cyan-500/20">
                <th className="text-cyan-400 w-1/4 p-4 text-left font-mono uppercase tracking-wider">Name</th>
                  <th className="text-cyan-400 w-1/4 p-4 text-left font-mono uppercase tracking-wider">NetMail</th>
                  <th className="text-cyan-400 w-3/4 p-4 text-left font-mono uppercase tracking-wider">Intel</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr
                    key={contact._id}
                    className="border-b border-cyan-500/10 hover:bg-cyan-400/5 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-cyan-400" />
                        <span className="text-cyan-300 font-mono">{contact.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-start space-x-2">
                        <FileText className="h-5 w-5 mt-1 flex-shrink-0 text-cyan-400" />
                        <p className="text-cyan-200 font-mono line-clamp-2">{contact.email}</p>
                      </div>
                    </td>
                    
                    <td className="p-4">
                      <div className="flex items-start space-x-2">
                        <FileText className="h-5 w-5 mt-1 flex-shrink-0 text-cyan-400" />
                        <p className="text-cyan-200 font-mono line-clamp-2">{contact.message}</p>
                      </div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
