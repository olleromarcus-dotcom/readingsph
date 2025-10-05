import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { BarChart3, TrendingUp } from 'lucide-react';

const MagsaysayEvaluation = () => {
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

  const getRatingColor = (rating) => {
    switch(rating) {
      case 1: return 'bg-red-600';
      case 2: return 'bg-orange-600';
      case 3: return 'bg-yellow-600';
      case 4: return 'bg-blue-600';
      case 5: return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const totalScore = evaluationData.reduce((sum, item) => sum + item.rating, 0);
  const averageScore = (totalScore / evaluationData.length).toFixed(1);

  return (
    <div className="space-y-12">
      {/* Evaluation Table */}
      <section id="evaluation" className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
                <BarChart3 className="mr-3" /> EVALUATION
              </h2>
              
              <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">EVALUATION OF MAGSAYSAY'S PRESIDENCY</h3>
              
              {/* Evaluation Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border-2 border-amber-800">
                  <thead>
                    <tr className="bg-amber-200">
                      <th className="border-2 border-amber-800 p-4 text-left font-bold text-amber-900">CATEGORY</th>
                      <th className="border-2 border-amber-800 p-2 text-center font-bold text-amber-900">1<br/>Very Poor</th>
                      <th className="border-2 border-amber-800 p-2 text-center font-bold text-amber-900">2<br/>Poor</th>
                      <th className="border-2 border-amber-800 p-2 text-center font-bold text-amber-900">3<br/>Fair</th>
                      <th className="border-2 border-amber-800 p-2 text-center font-bold text-amber-900">4<br/>Good</th>
                      <th className="border-2 border-amber-800 p-2 text-center font-bold text-amber-900">5<br/>Excellent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {evaluationData.map((item, index) => (
                      <tr key={index} className="bg-amber-50">
                        <td className="border-2 border-amber-800 p-4 font-semibold text-amber-900">{item.category}</td>
                        <td className="border-2 border-amber-800 p-2 text-center">
                          {item.rating === 1 && <span className="text-2xl font-bold text-amber-900">✓</span>}
                        </td>
                        <td className="border-2 border-amber-800 p-2 text-center">
                          {item.rating === 2 && <span className="text-2xl font-bold text-amber-900">✓</span>}
                        </td>
                        <td className="border-2 border-amber-800 p-2 text-center">
                          {item.rating === 3 && <span className="text-2xl font-bold text-amber-900">✓</span>}
                        </td>
                        <td className="border-2 border-amber-800 p-2 text-center">
                          {item.rating === 4 && <span className="text-2xl font-bold text-amber-900">✓</span>}
                        </td>
                        <td className="border-2 border-amber-800 p-2 text-center">
                          {item.rating === 5 && <span className="text-2xl font-bold text-amber-900">✓</span>}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-amber-100">
                      <td className="border-2 border-amber-800 p-4 font-bold text-amber-900">TOTAL: {averageScore} (Good)</td>
                      <td className="border-2 border-amber-800 p-2"></td>
                      <td className="border-2 border-amber-800 p-2"></td>
                      <td className="border-2 border-amber-800 p-2"></td>
                      <td className="border-2 border-amber-800 p-2"></td>
                      <td className="border-2 border-amber-800 p-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Evaluation Analysis */}
              <div className="space-y-6">
                <p className="text-amber-800 text-lg leading-relaxed">
                  Ramon Magsaysay's presidency is remembered by the nation as the "President of the Masses." His leadership left a remarkable improvement in different areas such as social welfare, infrastructure, and governance. However, his presidency was not without shortcomings.
                </p>
                
                <p className="text-amber-800 text-lg leading-relaxed">
                  One of the key contributions of Magsaysay was his effort to address land and social inequality. This was done through his implementations of the Agricultural Tenancy Act of 1954, the Land Reform Act of 1955, and the creation of NARRA. These programs promoted fairness to tenant farmers and accelerated land distribution to landless tenants. Further, he also pushed not just for urban development, but for rural areas as well through the Barrio Health Program. However, despite exhaustive efforts, these did not reach all farmers in rural communities. As for the community development, it was considered modest compared to the efforts given to social and political aspects.
                </p>
                
                <p className="text-amber-800 text-lg leading-relaxed">
                  On his economic programs, the implemented ACCFA, despite its benefits, also became an avenue for enabling landlords, merchant-usurers, bureaucrats, and rich peasants to control fake cooperatives and overpower the poor and middle peasants (Storm, n.d.). Moreover, membership in SEATO was said to be a way to allow the US imperialism to bring its allies. The mentioned notions are the shortcomings of the then-President Magsaysay's term.
                </p>
                
                <p className="text-amber-800 text-lg leading-relaxed">
                  To continue, Magsaysay's clean government campaign also gained admiration from the public. His administration was considered one of the least corrupt in Asia. His efforts to restore peace and order were seen in the weakening of Hukbalahap, resulting in restored stability as well.
                </p>
                
                <p className="text-amber-800 text-lg leading-relaxed">
                  In accordance with the mentioned successes and limitations in his leadership, his regime can be evaluated as 4 out of 5. This reflects the effectiveness made during his term in uplifting the different aspects of the nation, while also addressing the issues that drew criticism. Overall, Ramon Magsaysay's administration, despite its brief time, remains remarkable for its strong emphasis on bringing government closer to the people.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recommendations */}
      <section id="recommendations" className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-amber-50/80 border-amber-200 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center">
                <TrendingUp className="mr-3" /> RECOMMENDATION
              </h2>
              
              <p className="text-amber-800 text-lg leading-relaxed mb-6">
                Ramon Magsaysay, despite his celebrated accomplishments, had certain weaknesses that limited the long-term effect of his policies:
              </p>
              
              <div className="space-y-4">
                <div className="bg-amber-100 p-4 rounded-lg border border-amber-200">
                  <p className="text-amber-800 leading-relaxed">
                    Ensure continuity among reforms through establishing a permanent mechanism to handle citizen feedback and complaints, going beyond personal drive.
                  </p>
                </div>
                
                <div className="bg-amber-100 p-4 rounded-lg border border-amber-200">
                  <p className="text-amber-800 leading-relaxed">
                    To strengthen the Land reform implementation, monitoring bodies should be available to oversee the program implementations. Moreover, legal assistance and protection should be provided to tenant farmers. Lastly, ensure marginalized rural communities are reached through systematic phases in implementation.
                  </p>
                </div>
                
                <div className="bg-amber-100 p-4 rounded-lg border border-amber-200">
                  <p className="text-amber-800 leading-relaxed">
                    Include economic development, such as industrialization and employment programs to reduce dependency on agriculture, create job opportunities in urban centers, and promote vocational training programs.
                  </p>
                </div>
                
                <div className="bg-amber-100 p-4 rounded-lg border border-amber-200">
                  <p className="text-amber-800 leading-relaxed">
                    Develop industries and infrastructure that are domestic and local to reduce foreign reliance. Balanced trade policies should be sought after with other Asian nations for a diversified economic partnership.
                  </p>
                </div>
                
                <div className="bg-amber-100 p-4 rounded-lg border border-amber-200">
                  <p className="text-amber-800 leading-relaxed">
                    Expand rural development to provinces, such as infrastructure projects, while prioritizing resource allocation for proper distribution.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MagsaysayEvaluation;