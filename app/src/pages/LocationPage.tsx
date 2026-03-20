import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/ui/button';
import { districts } from '@/data/districts';
import { MapPin, Award, ShieldAlert, Search, Loader2, CheckCircle2 } from 'lucide-react';

export default function LocationPage() {
  const { districtCode } = useParams<{ districtCode: string }>();
  const data = districtCode ? districts[districtCode.toLowerCase()] : null;
  
  const [zip, setZip] = useState('');
  const [lookupStatus, setLookupStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  if (!data) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-zt-bg-primary">
        <h1 className="text-2xl font-bold text-zt-text-primary mb-4">District Not Found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    );
  }

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zip) return;
    setLookupStatus('loading');
    setTimeout(() => {
      setLookupStatus('success');
    }, 800);
  };

  // Course Schema Markup for SEO
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `ZeroTo1 CAC Accelerator - ${data.district_code}`,
    "description": `Elite 9-Month Accelerator for the Congressional App Challenge in ${data.state}'s ${data.district_number} District.`,
    "provider": {
      "@type": "Organization",
      "name": "ZeroTo1 Academy",
      "sameAs": "https://0to1cac.vercel.app"
    }
  };

  return (
    <div className="bg-zt-bg-primary min-h-screen text-zt-text-primary">
      {/* Dynamic SEO Meta Headers */}
      <Helmet>
        <title>{`Win the Congressional App Challenge in ${data.state} ${data.district_code}`}</title>
        <meta name="description" content={`Build a winning app for the Congressional App Challenge in ${data.state} ${data.district_code} with Rep. ${data.representative_name}. Join ZeroTo1's elite 9-month accelerator starting April.`} />
        <meta property="og:title" content={`Win the Congressional App Challenge in ${data.state} ${data.district_code}`} />
        <meta property="og:description" content={`Build a winning app for the Congressional App Challenge with Rep. ${data.representative_name}.`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      </Helmet>

      <Navigation />

      <main className="pt-24 lg:pt-32 pb-16 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Urgency/Scarcity Banner */}
        <div className="flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-200/60 px-4 py-1.5 rounded-full font-medium text-xs mb-4 shadow-sm animate-pulse">
          <Award size={14} className="text-amber-600" />
          <span>🔒 Only 5 seats remaining for {data.district_code} | ⏳ April Cohort starts in 12 days!</span>
        </div>

        {/* Location Tag */}
        <div className="flex items-center gap-2 bg-zt-accent-cyan/10 text-zt-accent-cyan px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider mb-6">
          <MapPin size={14} />
          <span>{data.state} District {data.district_number}</span>
        </div>

        {/* Interactive Lookup Widget */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm max-w-md w-full mb-10 text-left">
          <h4 className="font-display font-bold text-sm text-zt-text-primary mb-3 flex items-center gap-1.5">
            <Search size={16} className="text-zt-accent-purple" />
            Check Your Exclusivity Status
          </h4>
          <form onSubmit={handleLookup} className="flex gap-2">
            <input 
              type="text"
              placeholder="Enter 5-digit Zip Code..."
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              maxLength={5}
              className="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:border-zt-accent-purple"
            />
            <Button type="submit" size="sm" className="bg-zt-accent-purple hover:bg-zt-accent-purple/90 h-auto">
              {lookupStatus === 'loading' ? <Loader2 size={16} className="animate-spin" /> : 'Lookup'}
            </Button>
          </form>
          {lookupStatus === 'success' && (
            <div className="mt-3 flex items-center gap-2 text-xs text-emerald-600 font-medium animate-fadeIn">
              <CheckCircle2 size={14} />
              <span>Zip validated. You are eligible for {data.district_code} cohort.</span>
            </div>
          )}
        </div>

        {/* H1 Headline */}
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zt-text-primary mb-6 max-w-4xl tracking-tight leading-[1.1]">
          Win the Congressional App Challenge in {data.state}’s {data.district_number} District (<span className="text-zt-accent-purple">{data.district_code}</span>)
        </h1>

        {/* Localized Intro */}
        <p className="text-base lg:text-lg text-zt-text-secondary max-w-2xl mb-8 leading-relaxed">
          The competition for <span className="font-semibold text-zt-text-primary">{data.district_code}</span> is <span className="font-bold text-zt-text-primary">Hosted by Representative {data.representative_name}</span>. Students living or attending school in this district are highly eligible to submit.
        </p>

        {/* Competitive Edge Card */}
        <div className="bg-zt-bg-secondary border border-slate-100 p-6 lg:p-8 rounded-2xl max-w-3xl mb-12 shadow-sm text-left">
          <h3 className="flex items-center gap-2 font-display font-bold text-xl text-zt-text-primary mb-4">
            <ShieldAlert className="text-zt-accent-purple" size={24} />
            The Local Competitive Edge
          </h3>
          <p className="text-zt-text-secondary text-sm lg:text-base leading-relaxed">
            In {data.district_code}, the competition is fierce. Our ZeroTo1 Agent Squad has analyzed the last 5 years of winners in {data.state} to give {data.district_code} students a data-backed roadmap to the U.S. Capitol.
            {data.local_context && (
              <span className="block mt-3 pt-3 border-t border-slate-100 font-medium text-zt-text-primary flex items-start gap-1.5">
                <span className="text-amber-500">💡</span> {data.local_context}
              </span>
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mb-12 text-left">
          <div className="p-5 border border-slate-100 rounded-xl bg-white shadow-sm">
            <h4 className="font-bold text-zt-text-primary text-sm mb-2">Policy Advisor Agent</h4>
            <p className="text-xs text-zt-text-secondary leading-relaxed">
              {data.agent_logic?.policy_advisor || `Specifically tuned for ${data.state} STEM/Policy priorities. Assesses high-impact district problems so your app resonates perfectly on local submission reviews.`}
            </p>
          </div>
          <div className="p-5 border border-slate-100 rounded-xl bg-white shadow-sm">
            <h4 className="font-bold text-zt-text-primary text-sm mb-2">
               {data.agent_logic?.house_liaison ? 'House Liaison Agent' : 'Lead Architect Agent'}
            </h4>
            <p className="text-xs text-zt-text-secondary leading-relaxed">
              {data.agent_logic?.house_liaison || data.agent_logic?.media_director || (data.stem_focus ? `Provides ${data.stem_focus} compliance layer guards ensuring clean edge-case technical superiority in local code review metrics scores.` : `Optimizes app architecture for high scalability standards.`)}
            </p>
          </div>
        </div>

        {/* Localized FAQ */}
        <div className="max-w-3xl w-full text-left bg-zt-bg-secondary rounded-2xl p-6 lg:p-8 mb-12">
          <h3 className="font-display font-bold text-xl text-zt-text-primary mb-6">Localized FAQ</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-zt-text-primary text-sm mb-1">Where is the #HouseOfCode for {data.district_code} winners?</h4>
              <p className="text-xs text-zt-text-secondary">Winners are invited to represent their district and showcase their software directly at the Capitol in **Washington D.C.**.</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <h4 className="font-semibold text-zt-text-primary text-sm mb-1">What was a past winning theme in {data.state}?</h4>
              <p className="text-xs text-zt-text-secondary">Past successful templates inside `{data.state}` centered around **{data.past_winning_theme}** designs.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <Button size="lg" className="bg-zt-accent-purple hover:bg-zt-accent-purple/90 text-white px-8 py-6 text-base font-medium">
            Join the Residency for {data.district_code}
          </Button>
          <p className="font-mono text-xs text-zt-text-secondary flex items-center gap-1.5">
            <Award size={14} className="text-zt-accent-cyan" />
            <span>Secure one of 5 local seats for $197/mo.</span>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
