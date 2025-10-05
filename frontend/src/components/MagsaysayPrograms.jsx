import React from 'react';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { Building, Heart, DollarSign, Shield, Wrench } from 'lucide-react';

const MagsaysayPrograms = () => {
  return (
    <div className="space-y-12">
      {/* Scope */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">SCOPE</h2>
              <p className="text-amber-800 text-lg leading-relaxed">
                Despite having a short-term presidency, Ramon Magsaysay left a legacy that is still remembered and felt today. The following are some of the programs and policies implemented during his term.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Programs */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
                <Heart className="mr-3" /> SOCIAL PROGRAMS AND PROJECT
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Agricultural Tenancy Act of 1954 (RA 1199)</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>Republic Act 1199 established agricultural tenancy relations between landholders and tenants based on social justice.</li>
                    <li>This established a legal framework for agricultural tenancy to create a fair and just relationship between the landholders and tenants.</li>
                    <li>Under this, a contractual relationship between the tenant and the owner is made. A tenant-farmer (agricultural lessee) is granted the right to cultivate land in exchange for a share of the harvest (share tenancy) or for a fixed rental (leasehold tenancy).</li>
                  </ul>
                </div>

                <Separator className="bg-amber-200" />

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Establishment of NARRA (National Resettlement and Rehabilitation Administration)</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>Republic Act 1160 of 1954 created the National Resettlement and Rehabilitation Administration (NARRA) to accelerate land distribution to landless tenants and farm workers (Jurisprudence Philippines, n.d.).</li>
                    <li>It provided loans, transportation, and support to settlers while prohibiting officials from having financial interests.</li>
                    <li>The program also encouraged migration to sparsely populated areas.</li>
                  </ul>
                </div>

                <Separator className="bg-amber-200" />

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Land Reform Act of 1955 (RA 1400)</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>Republic Act 1400 of 1955 established the Land Tenure Administration (LTA) to acquire and redistribute tenanted rice and corn lands (LawPhil Project, 1955).</li>
                    <li>It aimed to address landlessness among Filipino citizens.</li>
                    <li>With the redistribution of the land to landless citizens, the Act promoted social justice, reduced poverty in rural areas, and enhanced agricultural productivity.</li>
                  </ul>
                </div>

                <Separator className="bg-amber-200" />

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Creation of the Land Tenure Administration (LTA)</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>The Act established the Land Tenure Administration, which was directly under the control and supervision of the President of the Philippines.</li>
                    <li>It was tasked to acquire and distribute agricultural lands to landless citizens.</li>
                    <li>Aims investigate the areas with land tenure difficulties and recommend appropriate actions (LawPhil Project, 1955).</li>
                  </ul>
                </div>

                <Separator className="bg-amber-200" />

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Barrio Health and Social Welfare Program</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>This program expanded rural health services, irrigation canal maintenance, and artesian well upkeep (Danguilan, 1999).</li>
                    <li>To strengthen the delivery of medical services, the RA 1082 reorganized health positions.</li>
                    <li>The program promoted cooperation between the government agencies and community organizations.</li>
                  </ul>
                </div>

                <Separator className="bg-amber-200" />

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Presidential Assistant for Community Development (PACD)</h3>
                  <p className="text-amber-800">To ensure rural development through infrastructure, health, and education programs, the PACD was created.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cultural Programs */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">CULTURAL PROGRAMS AND PROJECTS</h2>
              
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">Community Development Program</h3>
                <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                  <li>Ramon Magsaysay created the Presidential Assistant on Community Development (PACD) to implement the Philippine Community Development Program that would coordinate and integrate on a national scale the efforts of various governmental and civic agencies to improve the living conditions of barrio residents nationwide (Department of the Interior and Local Government, n.d.).</li>
                  <li>This promoted barrio residents' self-reliance and participation in community planning.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Economic Programs */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
                <DollarSign className="mr-3" /> ECONOMIC PROGRAMS AND PROJECT
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Agricultural Credits, and Cooperative Financing Administration (ACCFA)</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>Agricultural Credit and Cooperative Financing Administration was a former Philippine government agency established under Republic Act No. 821.</li>
                    <li>Aimed to provide credit to farmers and promote cooperatives.</li>
                    <li>It was later reorganized into the Agricultural Credit Administration under the Land Reform Code.</li>
                  </ul>
                </div>

                <Separator className="bg-amber-200" />

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Price Stabilization Corporation (PRISCO)</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>PRISCO was established to regulate the prices of commodities such as rice and ensure market stability.</li>
                    <li>Applies specifically to the price regulation of certain rice varieties to address concerns about market stability.</li>
                    <li>It amended price ceilings to protect consumers during shortages.</li>
                  </ul>
                </div>

                <Separator className="bg-amber-200" />

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Encouragement of Foreign Aid and Investments</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>Fostered positive foreign relations and encouraged a sense of national identity through initiatives such as the creation of the Southeast Asia Treaty Organization (SEATO).</li>
                    <li>Actively welcomed foreign capital and investment.</li>
                    <li>The government limited its role to areas vital for public welfare.</li>
                  </ul>
                </div>

                <Separator className="bg-amber-200" />

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Retail Trade Nationalization Act (RA 1180)</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>Known as the 1954 Retail Trade Nationalization Law, RA 1180 took effect during the administration of President Ramon Magsaysay. The first sentence says it all: "No person who is not a citizen of the Philippines, and no association, partnership, or corporation the capital of which is not wholly owned by citizens of the Philippines, shall engage directly or indirectly in the retail business (Inquirer.net, 2018)."</li>
                    <li>Restricts retail business operations in the Philippines to citizens and entities wholly owned by citizens.</li>
                    <li>The law strengthened Filipino economic independence and control over commerce.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Political Programs */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
                <Shield className="mr-3" /> POLITICAL PROGRAMS AND PROJECTS
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Clean Government Program</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>Former President Magsaysay's administration focused on eradicating corruption within the government.</li>
                    <li>His administration was ranked the second cleanest in Asia in terms of corruption.</li>
                  </ul>
                </div>

                <Separator className="bg-amber-200" />

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Peace and Order Against Hubalahap</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>Magsaysay persuaded people who joined the anti-government Huk (originally Hukbalahap, or Hukbo ng Bayan Laban sa Hapon) to surrender (Bolido, 2023).</li>
                    <li>He transformed the Armed Forces into a disciplined partner in development (Severo, 2016).</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Infrastructure Programs */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
                <Wrench className="mr-3" /> INFRASTRUCTURE, AND DEVELOPMENT PROGRAMS
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Ambuklao Powerplant Construction</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>First large hydroelectric facility in Southeast Asia.</li>
                    <li>The construction of Ambuklao Powerplant supported industrialization by supplying electricity to Metro Manila and Northern Luzon.</li>
                    <li>The project symbolized Magsaysay's vision of modern infrastructure as a driver of national progress (Philstar, 2011).</li>
                  </ul>
                </div>

                <Separator className="bg-amber-200" />

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Artesian Well Constructions</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>To provide potable water in rural areas, Magsaysay initiated the construction of Artesian Wells.</li>
                    <li>This program reduced waterborne diseases and improved sanitation.</li>
                  </ul>
                </div>

                <Separator className="bg-amber-200" />

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">School Building Programs (Barrio High Schools)</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>Between 1953 and 1956, the number of public schools increased from 23,600 to 26,370.</li>
                    <li>The number of teachers increased from 91,665 to 104,250 in the same period, highlighting expansion in both staff and infrastructure (Inquirer, 2015).</li>
                  </ul>
                </div>

                <Separator className="bg-amber-200" />

                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">People's Homesite and Housing Corporation Support</h3>
                  <ul className="list-disc list-inside space-y-2 text-amber-800 ml-4">
                    <li>Executive Order No. 148, signed by Magsaysay, prompted the creation of a National Housing Council to advise on policies toward low-cost housing, slum clearance, and family-owned homes.</li>
                    <li>It promoted family-owned homes and developed housing policies.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MagsaysayPrograms;