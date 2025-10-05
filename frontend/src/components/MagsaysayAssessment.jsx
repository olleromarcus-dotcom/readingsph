import React, { useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronUp, User, Calendar, MapPin, GraduationCap, Briefcase, Shield, Crown, Award, Building, Heart, Globe, BarChart3 } from 'lucide-react';

const MagsaysayAssessment = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const backToTop = document.getElementById('back-to-top');
      if (window.scrollY > 300) {
        backToTop.classList.remove('opacity-0');
        backToTop.classList.add('opacity-100');
      } else {
        backToTop.classList.remove('opacity-100');
        backToTop.classList.add('opacity-0');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'background', label: 'Background', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'early-career', label: 'Early Career', icon: Briefcase },
    { id: 'presidency', label: 'Presidency', icon: Crown },
    { id: 'legacy', label: 'Legacy', icon: Award },
    { id: 'programs', label: 'Programs', icon: Building },
    { id: 'evaluation', label: 'Evaluation', icon: BarChart3 },
    { id: 'recommendations', label: 'Recommendations', icon: Heart }
  ];

  const evaluationData = [
    { category: 'Social Programs', rating: 5 },
    { category: 'Cultural Programs', rating: 3 },
    { category: 'Economic Programs', rating: 4 },
    { category: 'Political Programs', rating: 5 },
    { category: 'Infrastructure and Development Programs', rating: 5 }
  ];

  const getRatingText = (rating) => {
    switch(rating) {
      case 1: return 'Very Poor';
      case 2: return 'Poor';
      case 3: return 'Fair';
      case 4: return 'Good';
      case 5: return 'Excellent';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-5 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Ramon_Magsaysay_Official_Malaca%C3%B1an_Portrait.jpg/250px-Ramon_Magsaysay_Official_Malaca%C3%B1an_Portrait.jpg')] bg-center bg-cover"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-100/90 backdrop-blur-sm border-b border-amber-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-amber-900">Ramon Magsaysay Assessment</h1>
            <div className="hidden md:flex space-x-6">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-2 text-amber-800 hover:text-amber-900 transition-colors"
                  >
                    <IconComponent size={16} />
                    <span className="text-sm">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Ramon_Magsaysay_Official_Malaca%C3%B1an_Portrait.jpg/250px-Ramon_Magsaysay_Official_Malaca%C3%B1an_Portrait.jpg" 
                alt="Ramon Magsaysay Official Portrait" 
                className="w-48 h-64 mx-auto rounded-lg shadow-2xl border-4 border-amber-200 sepia"
              />
            </div>
            <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif">READINGS IN THE PHILIPPINE HISTORY</h1>
            <h2 className="text-3xl font-semibold text-amber-800 mb-6">Assessment of Ramon Magsaysay's Presidency</h2>
            <p className="text-xl text-amber-700 italic">"Champion of the Masses" - 7th President of the Philippines</p>
          </div>
        </section>

        {/* Background Section */}
        <section id="background" className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
                  <User className="mr-3" /> BACKGROUND
                </h2>
                <div className="prose prose-amber max-w-none">
                  <p className="text-amber-800 text-lg leading-relaxed mb-4">
                    Ramon del Fierro Magsaysay "Champion of the Masses" - 7th president of the Philippines
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="text-amber-600" size={20} />
                        <div>
                          <p className="font-semibold text-amber-900">Born:</p>
                          <p className="text-amber-800">August 31, 1907 - Iba, Zambales</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="text-amber-600" size={20} />
                        <div>
                          <p className="font-semibold text-amber-900">Died:</p>
                          <p className="text-amber-800">March 17, 1957 (age 49) - Balamban, Cebu - Airplane Crash</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-amber-900 mb-2">Parents:</p>
                        <p className="text-amber-800">Exequiel Magsaysay Delos Santos - a blacksmith</p>
                        <p className="text-amber-800">Perfecta del Fierro Quimson - a school teacher</p>
                      </div>
                      <div>
                        <p className="font-semibold text-amber-900 mb-2">Spouse:</p>
                        <p className="text-amber-800">Luz Banzon</p>
                      </div>
                      <div>
                        <p className="font-semibold text-amber-900 mb-2">Children:</p>
                        <p className="text-amber-800">Teresita, Milagros, Ramon Jr.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Educational Background */}
        <section id="education" className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
                  <GraduationCap className="mr-3" /> EDUCATIONAL BACKGROUND
                </h2>
                <p className="text-amber-800 text-lg leading-relaxed">
                  He completed his elementary and secondary education in Zambales. During his higher education he studied at the University of The Philippines, in 1927, but later transferred to Jose Rizal College (now Jose Rizal University), from 1928-1932, where received a bachelor's degree in commerce with a major in mechanical engineering.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Early Profession & WWII */}
        <section id="early-career" className="py-12 px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
                  <Briefcase className="mr-3" /> EARLY PROFESSION
                </h2>
                <p className="text-amber-800 text-lg leading-relaxed">
                  To support himself he worked as a chauffeur during his studies in engineering. Before entering politics, he worked as an automobile mechanic then later on a general manager for a transportation company
                </p>
              </CardContent>
            </Card>

            <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
                  <Shield className="mr-3" /> WORLD WAR II
                </h2>
                <p className="text-amber-800 text-lg leading-relaxed">
                  He joined the Philippine army during World War II, where he served as a guerilla leader in Zambales, he then got appointed as a military governor in said province
                </p>
              </CardContent>
            </Card>

            <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-6">EARLY POLITICAL EXPERIENCE</h2>
                <p className="text-amber-800 text-lg leading-relaxed">
                  After the war, he was elected as a congressman representing Zambales in 1946. His reputation grew, leading to President Elpidio Quirino to appoint him as Secretary of National Defense in 1950. During which he became known for "one of the most successful antiguerilla campaign in modern history" against the Hukbalahap Rebellion
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Presidency */}
        <section id="presidency" className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
                  <Crown className="mr-3" /> PRESIDENCY
                </h2>
                <p className="text-amber-800 text-lg leading-relaxed">
                  During the 1953 election he ran for presidency under the Nacionalista Party where he won against Quirino, during this he also popularized the use of "campaign jingles". During his term, he then became known as the "champion of the masses" for his down-to-earth leadership and policies favoring the welfare of common people. He also opened the doors of Malacañang Palace making it accessible to the public.
                </p>
                <Separator className="my-6 bg-amber-200" />
                <p className="text-amber-800 text-lg leading-relaxed italic">
                  Tragically, he died on March 17, 1957 on the presidential plane which crashed on Mount Manunggal in Cebu.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Legacy */}
        <section id="legacy" className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
                  <Award className="mr-3" /> LEGACY
                </h2>
                <p className="text-amber-800 text-lg leading-relaxed mb-8">
                  Ramon Magsaysay's long-lasting impact on particular events continues to be relevant today. But what are the strengths and weaknesses of Ramon Magsaysay's term?
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-green-800 mb-4">STRENGTHS IN MAGSAYSAY'S LEGACY</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-2">Agrarian reform & protection of tenant rights</h4>
                        <p className="text-amber-800 text-sm">His Enactments involved establishing fairness in tenancy relationships, secure tenure, and equitable produce sharing. Established land and agrarian reform programs which provided secure tenure and reduced uncertainty for farmers</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-2">Effective suppression of the Hukbalahap insurgency</h4>
                        <p className="text-amber-800 text-sm">Reorganized the military by removing corrupt/incompetent officers. Emphasized mobility and flexibility to regain government territory and reduce Huk insurgency. Moreover, American aid and advisors were used in military efforts.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-2">Infrastructure & Rural Development</h4>
                        <p className="text-amber-800 text-sm">As a response to poverty, roads, schools, health clinics, irrigation, and wells are being provided in neglected rural areas.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-2">Anti-corruption and pro-people governance</h4>
                        <p className="text-amber-800 text-sm">Gained an incorruptibility reputation because he dismissed corrupt officials and made the government more responsive to common people.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-2">Foreign relations & reliance on international support</h4>
                        <p className="text-amber-800 text-sm">Retained close ties with the US that paved the way of military and economic aid.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-red-800 mb-4">WEAKNESSES IN MAGSAYSAY'S LEGACY</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-2">Imperfect implementation of reform</h4>
                        <p className="text-amber-800 text-sm">Tenant farmers remained vulnerable, while powerful landowners remained resistant. The reform still allowed landowners to keep large estates, so only very large haciendas were affected.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-2">Dependence on US aid and influence</h4>
                        <p className="text-amber-800 text-sm">A degree of foreign dependency was established in the consistent receipt of US aid in economics and military, which constrained domestic autonomy and shaped policy priorities.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-2">Lack of long-term planning</h4>
                        <p className="text-amber-800 text-sm">Didn't leave strong institutional frameworks due to reforms being personality-based/charismatic— often aimed to appeal to public sentiments that lacked long-term planning for immediate crises.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-2">Uneven rural developments</h4>
                        <p className="text-amber-800 text-sm">Remote provinces remained overlooked in the creation of roads, irrigation, and schools.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-2">Limited industrialization efforts</h4>
                        <p className="text-amber-800 text-sm">Focus on agrarian efforts overshadowed industry expansion or economic diversification.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Continue in next part... */}
        <div className="text-center py-8">
          <p className="text-amber-700 italic">Scroll down to continue reading...</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        id="back-to-top"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 opacity-0 transition-opacity duration-300 bg-amber-600 hover:bg-amber-700 text-white shadow-lg"
        size="icon"
      >
        <ChevronUp size={20} />
      </Button>
    </div>
  );
};

export default MagsaysayAssessment;