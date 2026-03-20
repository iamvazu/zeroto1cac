import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  Search, 
  User, 
  School, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Calendar, 
  ChevronRight,
  Lock,
  Loader2,
  Award
} from 'lucide-react';

export default function JoinPage() {
  const [step, setStep] = useState(1);
  const [zip, setZip] = useState('');
  const [loading, setLoading] = useState(false);
  const [zipVerified, setZipVerified] = useState(false);

  // Form States
  const [formData, setFormData] = useState({
    studentName: '',
    studentAge: '',
    school: '',
    experience: '',
    interests: '',
    pastParticipant: 'no',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    parentRelation: '',
    otherActivities: '',
  });

  const handleNext = () => {
    if (step === 1 && !zipVerified) return;
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleZipLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zip) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setZipVerified(true);
    }, 1000);
  };

  const roadmap = [
    { month: 'Month 1-2', title: 'Ideation & Validation', desc: 'Deep community research & idea validation with the Policy Advisor Agent.' },
    { month: 'Month 3-4', title: 'Architecture & Design', desc: 'Mastering professional-grade Python/Javascript and high-fidelity UX builds.' },
    { month: 'Month 5-7', title: 'The Code Build', desc: 'Sprint-based safe development with the infinite Lead Architect oversight.' },
    { month: 'Month 8', title: 'Submission Sprint', desc: 'Video production, technical documentation, and official House.gov filing.' },
    { month: 'Month 9', title: 'The #HouseOfCode', desc: 'Portfolio distribution and prep for the Capitol Hill celebration.' },
  ];

  return (
    <div className="bg-zt-bg-primary min-h-screen text-zt-text-primary">
      <Helmet>
        <title>Secure Your Seat | ZeroTo1 CAC Accelerator</title>
        <meta name="description" content="Join the elite April–December residency for ambitious 6th–12th graders building apps for the Congressional App Challenge." />
      </Helmet>

      <Navigation />

      <main className="pt-24 lg:pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Value Prop & Roadmap */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 bg-zt-accent-purple/10 text-zt-accent-purple px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider mb-6">
            <Lock size={14} />
            <span>Priority Enrollment Open</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-zt-text-primary mb-5 tracking-tight leading-[1.1]">
            Secure Your Seat in the 2026 Congressional App Challenge Accelerator
          </h1>

          <p className="text-base lg:text-lg text-zt-text-secondary mb-8 leading-relaxed max-w-xl">
            An intensive April–December residency for ambitious 6th–12th graders. Build a high-impact app with a dedicated AI Product Team to win your district.
          </p>

          {/* Value Prop Details */}
          <div className="space-y-4 mb-12 w-full max-w-xl">
            <div className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zt-accent-cyan/10 flex items-center justify-center text-zt-accent-cyan">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-zt-text-primary mb-1">Proprietary AI Policy Data</h4>
                <p className="text-xs text-zt-text-secondary">We've analyzed 2,500+ winning submissions to vet your idea for winner-potential correctly.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zt-accent-purple/10 flex items-center justify-center text-zt-accent-purple">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-zt-text-primary mb-1">100% Compliance Guarantee</h4>
                <p className="text-xs text-zt-text-secondary">Ensuring your code structure meets absolute House.gov guidelines safeguards your review scoring.</p>
              </div>
            </div>
          </div>

          {/* 9-Month Roadmap Timeline */}
          <div className="w-full max-w-xl">
            <h3 className="font-display font-bold text-xl text-zt-text-primary mb-6 flex items-center gap-2">
              <Calendar size={20} className="text-zt-accent-cyan" />
              The 9-Month Roadmap
            </h3>
            <div className="border-l-2 border-slate-100 pl-6 space-y-6 relative ml-3">
              {roadmap.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-2 border-zt-accent-purple" />
                  <p className="font-mono text-[10px] uppercase font-bold text-zt-accent-purple mb-0.5">{item.month}</p>
                  <h5 className="font-bold text-sm text-zt-text-primary mb-1">{item.title}</h5>
                  <p className="text-xs text-zt-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Multi-Step Form Wizard */}
        <div className="lg:col-span-5 w-full sticky top-32">
          <div className="bg-white border border-slate-100 rounded-3xl shadow-lg p-6 lg:p-8">
            
            {/* Stepper Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
              <span className="font-bold text-sm text-zt-text-primary">Priority Onboarding</span>
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className={`w-5 h-5 flex items-center justify-center rounded-full ${step >= 1 ? 'bg-zt-accent-purple text-white' : 'bg-slate-100'}`}>1</span>
                <span className="text-slate-300">-</span>
                <span className={`w-5 h-5 flex items-center justify-center rounded-full ${step >= 2 ? 'bg-zt-accent-purple text-white' : 'bg-slate-100'}`}>2</span>
                <span className="text-slate-300">-</span>
                <span className={`w-5 h-5 flex items-center justify-center rounded-full ${step === 3 ? 'bg-zt-accent-purple text-white' : 'bg-slate-100'}`}>3</span>
              </div>
            </div>

            {/* STEP 1: District Eligibility */}
            {step === 1 && (
              <div className="animate-fadeIn">
                <div className="flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-100 px-3 py-2 rounded-xl text-xs font-medium mb-6">
                  <Award size={14} className="text-amber-500" />
                  <span>Only 5 spots allocated per Congressional District.</span>
                </div>

                <h3 className="font-display font-bold text-lg text-zt-text-primary mb-2">Check Local Seat Availability</h3>
                <p className="text-xs text-zt-text-secondary mb-5">Confirm your eligibility and secure locking district priority weights.</p>

                <form onSubmit={handleZipLookup} className="flex gap-2 mb-4">
                  <input 
                    type="text" 
                    placeholder="Enter 5-Digit Zip Code..." 
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    maxLength={5}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-zt-accent-purple"
                  />
                  <Button type="submit" className="bg-zt-accent-purple">
                    {loading ? <Loader2 size={16} className="animate-spin" /> : <Search size={18} />}
                  </Button>
                </form>

                {zipVerified && (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-6 flex gap-3 items-start animate-fadeIn">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-xs text-emerald-800">Seat Available!</p>
                      <p className="text-[11px] text-emerald-700">Valid lookup for CA-17 (Rep. Ro Khanna). Seat allocation locked for 15 minutes.</p>
                    </div>
                  </div>
                )}

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-100 mb-2">
                    <span className="text-zt-text-secondary">Accelerator Residency</span>
                    <span className="font-bold text-zt-text-primary">$197 / mo</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zt-text-secondary">Cohort Cycles</span>
                    <span className="font-bold text-zt-text-primary">April – December</span>
                  </div>
                </div>

                <Button 
                  onClick={handleNext} 
                  disabled={!zipVerified} 
                  className="w-full bg-zt-accent-purple flex items-center justify-center gap-1 py-6Disabled disabled:opacity-50"
                  style={{ opacity: zipVerified ? 1 : 0.5 }}
                >
                  Continue to Application <ChevronRight size={16} />
                </Button>
              </div>
            )}

            {/* STEP 2: Child Details */}
            {step === 2 && (
              <div className="animate-fadeIn">
                <h3 className="font-display font-bold text-lg text-zt-text-primary mb-1">Student Profile</h3>
                <p className="text-xs text-zt-text-secondary mb-5">Informing instructions for the Lead Architect sizing loops.</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-medium text-zt-text-primary mb-1.5 flex items-center gap-1">
                      <User size={12} /> Student Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      value={formData.studentName}
                      onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-zt-accent-purple"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zt-text-primary mb-1.5">Age</label>
                      <input 
                        type="number" 
                        placeholder="14"
                        value={formData.studentAge}
                        onChange={(e) => setFormData({...formData, studentAge: e.target.value})}
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zt-text-primary mb-1.5 flex items-center gap-1">
                        <School size={12} /> Grade / School
                      </label>
                      <input 
                        type="text" 
                        placeholder="Middle School"
                        value={formData.school}
                        onChange={(e) => setFormData({...formData, school: e.target.value})}
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zt-text-primary mb-1.5 flex items-center gap-1">
                      <Terminal size={12} /> Coding Experience
                    </label>
                    <select 
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm text-zt-text-secondary focus:outline-none"
                    >
                      <option value="">Select Level...</option>
                      <option value="none">Total Beginner (No Code)</option>
                      <option value="beginner">Beginner (Scratch / Basic Python)</option>
                      <option value="intermediate">Intermediate (Javascript / Web apps)</option>
                      <option value="advanced">Advanced (Data structs & APIs)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zt-text-primary mb-1.5">Has ever participated in CAC before?</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-1.5 text-xs text-zt-text-secondary">
                        <input type="radio" name="cac" value="yes" checked={formData.pastParticipant === 'yes'} onChange={(e) => setFormData({...formData, pastParticipant: e.target.value})} className="accent-zt-accent-purple" /> Yes
                      </label>
                      <label className="flex items-center gap-1.5 text-xs text-zt-text-secondary">
                        <input type="radio" name="cac" value="no" checked={formData.pastParticipant === 'no'} onChange={(e) => setFormData({...formData, pastParticipant: e.target.value})} className="accent-zt-accent-purple" /> No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={handleBack} variant="outline" className="w-1/3">Back</Button>
                  <Button onClick={handleNext} className="w-2/3 bg-zt-accent-purple flex items-center justify-center gap-1">
                    Next Step <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: Parent Details */}
            {step === 3 && (
              <div className="animate-fadeIn">
                <h3 className="font-display font-bold text-lg text-zt-text-primary mb-1">Guardian profile</h3>
                <p className="text-xs text-zt-text-secondary mb-5">Primary authorizing credentials for residency enrollment.</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-medium text-zt-text-primary mb-1.5">Parent Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe Sr."
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-zt-accent-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zt-text-primary mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.parentEmail}
                      onChange={(e) => setFormData({...formData, parentEmail: e.target.value})}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zt-text-primary mb-1.5">What other activities is your child into?</label>
                    <textarea 
                      placeholder="Robotics club, swim team, debate..."
                      value={formData.otherActivities}
                      onChange={(e) => setFormData({...formData, otherActivities: e.target.value})}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm h-16 resize-none focus:outline-none focus:border-zt-accent-purple"
                    />
                  </div>

                  <div className="flex items-start gap-2 text-[10px] text-zt-text-secondary">
                    <Lock size={12} className="mt-0.5 flex-shrink-0 text-slate-400" />
                    <span>Your seat is secured for 15 minutes. Submitting will direct you to absolute checkout subscription billing via Stripe for $197/mo terminate cycle.</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={handleBack} variant="outline" className="w-1/3">Back</Button>
                  <Button className="w-2/3 bg-zt-accent-green bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-1 shadow-lg shadow-emerald-600/10">
                    Secure Seat & Enroll <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
            )}

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
