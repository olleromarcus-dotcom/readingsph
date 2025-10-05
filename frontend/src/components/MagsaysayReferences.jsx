import React from 'react';
import { Card, CardContent } from './ui/card';
import { Globe } from 'lucide-react';

const MagsaysayReferences = () => {
  const references = [
    {
      text: "Bolido, L. B. (2023, March 26). 66 years after death, Ramon Magsaysay still a yardstick of presidency. Philippine Daily Inquirer.",
      url: "https://newsinfo.inquirer.net/1748198/66-years-after-death-ramon-magsaysay-still-a-yardstick-of-presidency"
    },
    {
      text: "Britannica Editors. (2025, September 1). Ramon Magsaysay | Philippine President. Encyclopedia Britannica.",
      url: "https://www.britannica.com/biography/Ramon-Magsaysay"
    },
    {
      text: "Danguilan, M. J. (1999). Bullets and Bandages: Public Health as a Tool of Engagement in the Philippines (Research Paper No. 161). Takemi Program in International Health, Harvard School of Public Health. Retrieved from",
      url: "https://content.sph.harvard.edu/wwwhsph/sites/114/2012/10/rp161.pdf"
    },
    {
      text: "Department of the Interior and Local Government. (n.d.). Who we are. Local Governance Performance Management System. Retrieved September 26, 2025, from",
      url: "https://lgpms.dilg.gov.ph/site/who-we-are"
    },
    {
      text: "History Rise. (2025, August 22). Ramon Magsaysay: Champion of the Common Man – His Legacy Unveiled. History Rise. Retrieved September 30, 2025, from",
      url: "https://historyrise.com/ramon-magsaysay-champion-of-the-common-man/"
    },
    {
      text: "Inquirer. (2015, March 4). Magsaysay the education guy. Inquirer.net.",
      url: "https://newsinfo.inquirer.net/679235/magsaysay-the-education-guy"
    },
    {
      text: "Inquirer.net. (2018, October 19). Know the law. Inquirer Business.",
      url: "https://business.inquirer.net/259160/know-the-law"
    },
    {
      text: "Jurisprudence Philippines. (n.d.). Free distribution of agricultural lands of public domain.",
      url: "https://jur.ph/law/summary/free-distribution-of-agricultural-lands-of-public-domain"
    },
    {
      text: "LawPhil Project. (1955). Republic Act No. 1400: Land Reform Act of 1955. Retrieved September 25, 2025, from",
      url: "https://lawphil.net/statutes/repacts/ra1955/ra_1400_1955.html"
    },
    {
      text: "Philstar. (2011, July 7). The rebirth of the Ambuklao hydro plant. The Philippine Star.",
      url: "https://www.philstar.com/business/science-and-environment/2011/07/07/703064/rebirth-ambuklao-hydro-plant"
    },
    {
      text: "Sinaunang Panahon. (2025, March 28). The Magsaysay Era: The Golden Age of Philippine Democracy (1953-1957). Sinaunangpanahon. Retrieved September 30, 2025, from",
      url: "https://sinaunangpanahon.com/the-magsaysay-era-the-golden-age-of-philippine-democracy-1953-1957/"
    },
    {
      text: "Storm, F. Q. (n.d.). Philippine Society and Revolution.",
      url: "https://www.marxists.org/history/philippines/cpp/guerrero/1970/psr.htm"
    }
  ];

  return (
    <section id="references" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
              <Globe className="mr-3" /> REFERENCES
            </h2>
            
            <div className="space-y-4">
              {references.map((reference, index) => (
                <div key={index} className="border-l-4 border-amber-300 pl-4 py-2">
                  <p className="text-amber-800 text-sm leading-relaxed">
                    {reference.text}{' '}
                    <a 
                      href={reference.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 underline break-all"
                    >
                      {reference.url}
                    </a>
                  </p>
                </div>
              ))}
            </div>

            {/* Student Information */}
            <div className="mt-12 pt-8 border-t-2 border-amber-200">
              <div className="text-center">
                <p className="text-lg font-semibold text-amber-900 mb-2">
                  Prepared by:
                </p>
                <p className="text-amber-800 text-lg">
                  Quilop, Naguit, Ollero
                </p>
                <p className="text-amber-700 text-md">
                  II-C Psychology
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MagsaysayReferences;