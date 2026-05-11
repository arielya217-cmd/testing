import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#fbf9f4', text: '#0c0b09', accent: '#1f3a5f' },
  fonts: {
    display: 'Georgia, "Times New Roman", "Source Serif Pro", serif',
    body: '-apple-system, BlinkMacSystemFont, "Inter", "Helvetica Neue", system-ui, sans-serif',
  },
  typeScale: { hero: 84, body: 22 },
  radius: 0,
};

const ink = '#0c0b09';
const muted = '#6a6358';
const subtle = '#a39c8d';
const rule = '#c9c2b6';
const ruleHard = '#0c0b09';
const highlight = '#f1ead7';
const highlightDeep = '#e6dcbf';
const navy = '#1f3a5f';
const navyDim = '#3d5980';
const red = '#7a2018';
const offPanel = '#f3efe5';

const PAGE_PAD_X = 96;
const PAGE_PAD_TOP = 64;
const PAGE_PAD_BOTTOM = 56;

const fillBase = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  fontFeatureSettings: '"tnum" 1, "lnum" 1',
  WebkitFontSmoothing: 'antialiased',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  padding: `${PAGE_PAD_TOP}px ${PAGE_PAD_X}px ${PAGE_PAD_BOTTOM}px ${PAGE_PAD_X}px`,
} as const;

const Header = ({ kicker, title, number }: { kicker: string; title: string; number: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
      <div style={{ fontSize: 15, letterSpacing: '0.24em', color: navy, fontWeight: 700, textTransform: 'uppercase' }}>
        {kicker}
      </div>
      <div style={{ fontSize: 12, letterSpacing: '0.22em', color: muted, fontWeight: 500, textTransform: 'uppercase' }}>
        {number}&nbsp;&nbsp;·&nbsp;&nbsp;Search Fund Pitch&nbsp;&nbsp;·&nbsp;&nbsp;AI-Enabled Roll-Up · Israeli Accounting
      </div>
    </div>
    <h1
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 50,
        lineHeight: 1.1,
        fontWeight: 700,
        margin: 0,
        letterSpacing: '-0.012em',
        color: ink,
      }}
    >
      {title}
    </h1>
    <div style={{ height: 1, background: ruleHard, marginTop: 16 }} />
  </div>
);

const Footer = ({ left, right }: { left: string; right?: string }) => (
  <div style={{ marginTop: 'auto', flexShrink: 0 }}>
    <div style={{ height: 1, background: rule, marginBottom: 10 }} />
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 32, fontSize: 12, color: muted, lineHeight: 1.5 }}>
      <div style={{ maxWidth: right ? '64%' : '100%' }}>{left}</div>
      {right ? <div style={{ maxWidth: '34%', textAlign: 'right' }}>{right}</div> : null}
    </div>
  </div>
);

// --------------------------------------------------------------------------
// Slide 1 — Market Sizing
// --------------------------------------------------------------------------

const WATERFALL_MAX = 37675;
const WATERFALL_H = 280;
const WATERFALL_W = 1280;
const WATERFALL_SLOT = WATERFALL_W / 6;

const WBar = ({
  index,
  label,
  sub,
  display,
  from,
  to,
  kind,
}: {
  index: number;
  label: string;
  sub: string;
  display: string;
  from: number;
  to: number;
  kind: 'total' | 'minus';
}) => {
  const isTotal = kind === 'total';
  const color = isTotal ? navy : red;
  const slotW = WATERFALL_SLOT;
  const barW = slotW * 0.6;
  const x = index * slotW;
  const topPx = ((WATERFALL_MAX - to) / WATERFALL_MAX) * WATERFALL_H;
  const heightPx = Math.max(3, ((to - from) / WATERFALL_MAX) * WATERFALL_H);
  return (
    <div style={{ position: 'absolute', left: x, top: 0, width: slotW, height: WATERFALL_H + 78 }}>
      <div
        style={{
          position: 'absolute',
          left: (slotW - barW) / 2,
          top: topPx,
          width: barW,
          height: heightPx,
          background: color,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          width: slotW,
          top: Math.max(0, topPx - 28),
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 700,
          color: ink,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {display}
      </div>
      <div style={{ position: 'absolute', left: 8, right: 8, top: WATERFALL_H + 10 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: ink, letterSpacing: '0.02em', lineHeight: 1.25 }}>{label}</div>
        <div style={{ fontSize: 12, color: muted, marginTop: 4, lineHeight: 1.35 }}>{sub}</div>
      </div>
    </div>
  );
};

const Waterfall = () => (
  <div style={{ position: 'relative', width: WATERFALL_W, height: WATERFALL_H + 80 }}>
    <div style={{ position: 'absolute', left: 0, right: 0, top: WATERFALL_H, height: 1, background: ruleHard }} />
    <WBar index={0} kind="total" label="Active CPA licenses" sub="Ministry of Justice registry" display="37,675" from={0} to={37675} />
    <WBar index={1} kind="minus" label="Non-practicing" sub="Retired · abroad · on hold" display="(6,000)" from={31675} to={37675} />
    <WBar index={2} kind="minus" label="In industry" sub="Corporate CFO · hi-tech · gov · banking" display="(10,000)" from={21675} to={31675} />
    <WBar index={3} kind="minus" label="Big 4 employees" sub="EY · KPMG · PwC · Deloitte" display="(4,200)" from={17475} to={21675} />
    <WBar index={4} kind="minus" label="Mid-tier employees" sub="BDO Israel · Fahn Kanne · 5–8 firms" display="(2,300)" from={15175} to={17475} />
    <WBar index={5} kind="total" label="Private practice pool" sub="Universe before size segmentation" display="15,175" from={0} to={15175} />
  </div>
);

const DistRow = ({
  size,
  cpas,
  avg,
  firms,
  target,
}: {
  size: string;
  cpas: string;
  avg: string;
  firms: string;
  target?: boolean;
}) => (
  <tr style={{ background: target ? highlight : 'transparent' }}>
    <td style={{ padding: '12px 14px', borderTop: `1px solid ${rule}`, fontSize: 17, fontWeight: target ? 700 : 500, color: ink, position: 'relative' }}>
      {target ? (
        <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: navy }} />
      ) : null}
      {size}
      {target ? (
        <span style={{ marginLeft: 12, fontSize: 11, letterSpacing: '0.18em', color: navy, fontWeight: 700 }}>
          ◆ TARGET
        </span>
      ) : null}
    </td>
    <td style={{ padding: '12px 14px', borderTop: `1px solid ${rule}`, fontSize: 17, textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: ink, fontWeight: target ? 600 : 400 }}>{cpas}</td>
    <td style={{ padding: '12px 14px', borderTop: `1px solid ${rule}`, fontSize: 17, textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: ink, fontWeight: target ? 600 : 400 }}>{avg}</td>
    <td style={{ padding: '12px 14px', borderTop: `1px solid ${rule}`, fontSize: 17, textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: ink, fontWeight: target ? 700 : 500 }}>{firms}</td>
  </tr>
);

const SideNote = ({ label, body }: { label: string; body: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <div style={{ fontSize: 11, letterSpacing: '0.22em', color: navy, fontWeight: 700, textTransform: 'uppercase' }}>{label}</div>
    <div style={{ fontSize: 14, color: ink, lineHeight: 1.5 }}>{body}</div>
  </div>
);

const Slide1: Page = () => (
  <div style={fillBase}>
    <Header
      kicker="Market Sizing"
      title="From 37,000 CPAs to ~360 Target Firms — A Bottom-Up Universe Map"
      number="01 / 05"
    />

    <div style={{ display: 'flex', gap: 40, marginTop: 22 }}>
      <div style={{ flex: '0 0 auto' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.22em', color: muted, fontWeight: 700, marginBottom: 10 }}>
          UNIVERSE WATERFALL · ACTIVE CPAs → PRIVATE PRACTICE POOL
        </div>
        <Waterfall />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18, paddingLeft: 22, borderLeft: `1px solid ${rule}` }}>
        <SideNote
          label="Staffing Ratio"
          body="1 CPA : 1.5 bookkeepers in the target band. Headcount math from CPA count is reliable in this range."
        />
        <SideNote
          label="Triangulation"
          body="Network affiliates 158–475 · sourcing database 200–480 · top-down 250–500. Convergence: 300–400."
        />
        <SideNote
          label="Key Exclusions"
          body="7,500 solos (sub-scale) · 2,650 micro firms (below deployment economics) · Big 4 + mid-tier (different buyer dynamic)."
        />
      </div>
    </div>

    <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.22em', color: muted, fontWeight: 700 }}>
          FIRM DISTRIBUTION WITHIN PRIVATE PRACTICE POOL · 15,175 CPAs
        </div>
        <div style={{ fontSize: 11, letterSpacing: '0.22em', color: muted, fontWeight: 700 }}>
          n CPAs · % of pool · firms (implied)
        </div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
        <colgroup>
          <col style={{ width: '38%' }} />
          <col style={{ width: '22%' }} />
          <col style={{ width: '18%' }} />
          <col style={{ width: '22%' }} />
        </colgroup>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px 14px', fontSize: 12, letterSpacing: '0.18em', color: muted, fontWeight: 700, textTransform: 'uppercase', borderBottom: `1px solid ${ruleHard}` }}>Firm size</th>
            <th style={{ textAlign: 'right', padding: '8px 14px', fontSize: 12, letterSpacing: '0.18em', color: muted, fontWeight: 700, textTransform: 'uppercase', borderBottom: `1px solid ${ruleHard}` }}>CPAs in band</th>
            <th style={{ textAlign: 'right', padding: '8px 14px', fontSize: 12, letterSpacing: '0.18em', color: muted, fontWeight: 700, textTransform: 'uppercase', borderBottom: `1px solid ${ruleHard}` }}>Avg CPAs/firm</th>
            <th style={{ textAlign: 'right', padding: '8px 14px', fontSize: 12, letterSpacing: '0.18em', color: muted, fontWeight: 700, textTransform: 'uppercase', borderBottom: `1px solid ${ruleHard}` }}>Implied firms</th>
          </tr>
        </thead>
        <tbody>
          <DistRow size="Solo practitioner" cpas="~7,500  (49%)" avg="1.0" firms="~7,500" />
          <DistRow size="2–9 employees" cpas="~5,300  (35%)" avg="~2" firms="~2,650" />
          <DistRow size="10–19 employees" cpas="~1,500  (10%)" avg="~5" firms="~300" target />
          <DistRow size="20–49 employees" cpas="~700  (5%)" avg="~12" firms="~60" target />
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14, padding: '12px 16px', borderTop: `2px solid ${ruleHard}`, borderBottom: `1px solid ${rule}`, background: offPanel }}>
        <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 22, fontWeight: 700, color: ink, letterSpacing: '-0.005em' }}>
          Target band total: <span style={{ color: navy }}>~360 firms</span>
          <span style={{ fontFamily: 'var(--osd-font-body)', fontWeight: 500, color: muted, fontSize: 18, marginLeft: 14 }}>range 250–500</span>
        </div>
        <div style={{ fontSize: 13, color: muted, letterSpacing: '0.04em' }}>
          Acquirable universe · 10–49 employee band
        </div>
      </div>
    </div>

    <Footer
      left="Sources: Ministry of Justice CPA registry · ICPAI · BDI Code · Dun's 100 · international network affiliate lists · project sourcing database."
      right="Active license count as of latest registry pull. Firm counts derived from CPA-per-firm ratios benchmarked against affiliate disclosures."
    />
  </div>
);

// --------------------------------------------------------------------------
// Slide 2 — Firm Anatomy
// --------------------------------------------------------------------------

const StageTag = ({ label, tone }: { label: string; tone: 'mute' | 'mute2' | 'target' | 'target2' | 'priced' | 'oos' }) => {
  const palette: Record<string, { bg: string; fg: string }> = {
    mute: { bg: offPanel, fg: muted },
    mute2: { bg: offPanel, fg: muted },
    target: { bg: navy, fg: '#fbf9f4' },
    target2: { bg: highlightDeep, fg: navy },
    priced: { bg: 'transparent', fg: red },
    oos: { bg: 'transparent', fg: muted },
  };
  const p = palette[tone];
  const border = tone === 'priced' ? `1px solid ${red}` : tone === 'oos' ? `1px solid ${rule}` : 'none';
  return (
    <div style={{
      display: 'inline-block', padding: '4px 10px', fontSize: 10, fontWeight: 800, letterSpacing: '0.22em',
      textTransform: 'uppercase', background: p.bg, color: p.fg, border, lineHeight: 1.2,
    }}>
      {label}
    </div>
  );
};

const LCell = ({ children, target, head }: { children: React.ReactNode; target?: boolean; head?: boolean }) => (
  <td style={{
    padding: '10px 12px',
    borderTop: `1px solid ${rule}`,
    fontSize: head ? 16 : 14,
    fontWeight: head ? 700 : 400,
    color: head ? ink : ink,
    background: target ? highlight : 'transparent',
    verticalAlign: 'top',
    lineHeight: 1.4,
  }}>
    {children}
  </td>
);

const LRowLabel = ({ children }: { children: React.ReactNode }) => (
  <td style={{
    padding: '10px 0 10px 0',
    borderTop: `1px solid ${rule}`,
    fontSize: 12,
    letterSpacing: '0.18em',
    color: muted,
    fontWeight: 700,
    textTransform: 'uppercase',
    verticalAlign: 'top',
    lineHeight: 1.3,
    paddingRight: 14,
  }}>
    {children}
  </td>
);

const Slide2: Page = () => (
  <div style={fillBase}>
    <Header
      kicker="Market Context · Firm Anatomy"
      title="What an Israeli Accounting Firm Looks Like — Across the Lifecycle"
      number="02 / 05"
    />

    <div style={{ marginTop: 14, marginBottom: 14, fontSize: 18, lineHeight: 1.5, color: ink, maxWidth: 1500 }}>
      Operations, revenue, and service mix shift dramatically by firm size. The target band — <strong style={{ color: navy }}>10–49 employees</strong> — is the operationally addressable segment.
    </div>

    <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
      <colgroup>
        <col style={{ width: '13%' }} />
        <col style={{ width: '14.5%' }} />
        <col style={{ width: '14.5%' }} />
        <col style={{ width: '14.5%' }} />
        <col style={{ width: '14.5%' }} />
        <col style={{ width: '14.5%' }} />
        <col style={{ width: '14.5%' }} />
      </colgroup>
      <thead>
        <tr>
          <th />
          <th style={{ textAlign: 'left', padding: '0 12px 8px 12px', fontSize: 18, fontFamily: 'var(--osd-font-display)', fontWeight: 700, color: ink, borderBottom: `1px solid ${ruleHard}` }}>Solo</th>
          <th style={{ textAlign: 'left', padding: '0 12px 8px 12px', fontSize: 18, fontFamily: 'var(--osd-font-display)', fontWeight: 700, color: ink, borderBottom: `1px solid ${ruleHard}` }}>Boutique</th>
          <th style={{ textAlign: 'left', padding: '0 12px 8px 12px', fontSize: 18, fontFamily: 'var(--osd-font-display)', fontWeight: 700, color: navy, borderBottom: `2px solid ${navy}`, background: highlight }}>Small Firm</th>
          <th style={{ textAlign: 'left', padding: '0 12px 8px 12px', fontSize: 18, fontFamily: 'var(--osd-font-display)', fontWeight: 700, color: navy, borderBottom: `2px solid ${navy}`, background: highlight }}>Mid-Sized</th>
          <th style={{ textAlign: 'left', padding: '0 12px 8px 12px', fontSize: 18, fontFamily: 'var(--osd-font-display)', fontWeight: 700, color: ink, borderBottom: `1px solid ${ruleHard}` }}>Mid-Tier</th>
          <th style={{ textAlign: 'left', padding: '0 12px 8px 12px', fontSize: 18, fontFamily: 'var(--osd-font-display)', fontWeight: 700, color: ink, borderBottom: `1px solid ${ruleHard}` }}>Big 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <LRowLabel>Stage</LRowLabel>
          <LCell><StageTag label="Sub-scale" tone="mute" /></LCell>
          <LCell><StageTag label="Below threshold" tone="mute2" /></LCell>
          <LCell target><StageTag label="Primary target" tone="target" /></LCell>
          <LCell target><StageTag label="Premium target" tone="target2" /></LCell>
          <LCell><StageTag label="Priced out" tone="priced" /></LCell>
          <LCell><StageTag label="Out of scope" tone="oos" /></LCell>
        </tr>
        <tr>
          <LRowLabel>Employees</LRowLabel>
          <LCell head>1</LCell>
          <LCell head>2–9</LCell>
          <LCell target head>10–19</LCell>
          <LCell target head>20–49</LCell>
          <LCell head>50–500</LCell>
          <LCell head>1,200–1,800</LCell>
        </tr>
        <tr>
          <LRowLabel>Annual revenue (ILS)</LRowLabel>
          <LCell>200K–800K</LCell>
          <LCell>800K–3M</LCell>
          <LCell target><strong style={{ color: navy }}>4–8M</strong></LCell>
          <LCell target><strong style={{ color: navy }}>8–25M</strong></LCell>
          <LCell>50M–500M</LCell>
          <LCell>500M–1B+</LCell>
        </tr>
        <tr>
          <LRowLabel>Staff composition</LRowLabel>
          <LCell>1 CPA</LCell>
          <LCell>1–3 CPAs · 1–6 bookkeepers</LCell>
          <LCell target>4–7 CPAs · 5–11 bookkeepers · 1–2 admin</LCell>
          <LCell target>8–20 CPAs · 10–25 bookkeepers · 2–4 managers</LCell>
          <LCell>60%+ CPAs · audit-heavy</LCell>
          <LCell>60–70% CPAs · global integration</LCell>
        </tr>
        <tr>
          <LRowLabel>Service mix</LRowLabel>
          <LCell>70% bookkeeping/tax · 20% payroll · 10% advisory</LCell>
          <LCell>60% bookkeeping · 25% tax · 10% payroll · 5% advisory</LCell>
          <LCell target>50% bookkeeping · 25% tax · 10% payroll · 10% audit · 5% advisory</LCell>
          <LCell target>35% bookkeeping · 25% tax · 10% payroll · 20% audit · 10% advisory</LCell>
          <LCell>40–50% audit · 20% tax · 25% advisory · 10% bookkeeping</LCell>
          <LCell>50–60% audit · 15–20% tax · 25–30% advisory</LCell>
        </tr>
        <tr>
          <LRowLabel>Client profile</LRowLabel>
          <LCell>30–80 micro · avg ILS 5–15K/yr</LCell>
          <LCell>80–200 SMBs · avg ILS 8–20K/yr</LCell>
          <LCell target>150–300 SMBs · avg ILS 15–50K/yr</LCell>
          <LCell target>300–600 SMBs + growth co. · avg ILS 20–100K/yr</LCell>
          <LCell>Hi-tech · public co. · avg ILS 100K–2M</LCell>
          <LCell>89% of public-co. audits · avg ILS 500K–10M+</LCell>
        </tr>
        <tr>
          <LRowLabel>Acquisition viability</LRowLabel>
          <LCell><span style={{ color: muted }}>Sub-scale</span></LCell>
          <LCell><span style={{ color: muted }}>Integration cost &gt; value</span></LCell>
          <LCell target><strong style={{ color: navy }}>Full lever set · institutional-ready</strong></LCell>
          <LCell target><strong style={{ color: navy }}>Operationally mature · multiple paths</strong></LCell>
          <LCell><span style={{ color: red }}>PE-priced · competing buyers</span></LCell>
          <LCell><span style={{ color: muted }}>Not for sale</span></LCell>
        </tr>
      </tbody>
    </table>

    <div style={{
      marginTop: 18,
      padding: '16px 20px',
      background: navy,
      color: '#fbf9f4',
      borderLeft: `4px solid ${highlightDeep}`,
      fontSize: 18,
      lineHeight: 1.5,
    }}>
      <div style={{ fontSize: 11, letterSpacing: '0.24em', color: highlightDeep, fontWeight: 700, marginBottom: 6 }}>STRATEGIC INSIGHT</div>
      Service mix and labor composition shift in <em>opposite</em> directions across the lifecycle: bookkeeping and tax dominate where AI delivers margin (target band), audit dominates where CPA labor is regulated (mid-tier and above). The <strong>10–49 employee band</strong> is the only acquirable segment with operational maturity, AI-leverage in service mix, and owner-operator dynamics.
    </div>

    <Footer
      left="All firms operate under Section 6ז (CPA-only ownership). The roll-up addresses this via a dual-entity model — separate CPA-licensed audit/tax LP and a non-regulated services company."
      right="Sources: Ministry of Justice CPA registry · ICPAI · BDI Code · Dun's 100 · project sourcing database."
    />
  </div>
);

// --------------------------------------------------------------------------
// Slide 3 — Four Structural Advantages
// --------------------------------------------------------------------------

const AdvCard = ({
  num,
  eyebrow,
  headline,
  body,
  footer,
}: {
  num: string;
  eyebrow: string;
  headline: string;
  body: string;
  footer: string;
}) => (
  <div style={{
    border: `1px solid ${ruleHard}`,
    padding: '24px 28px 22px 28px',
    background: 'var(--osd-bg)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    boxSizing: 'border-box',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
      <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 36, fontWeight: 700, color: navy, lineHeight: 1 }}>{num}</div>
      <div style={{ fontSize: 11, letterSpacing: '0.24em', color: navy, fontWeight: 700, textAlign: 'right' }}>{eyebrow}</div>
    </div>
    <div style={{ height: 1, background: rule, marginBottom: 14 }} />
    <div style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 26,
      fontWeight: 700,
      color: ink,
      lineHeight: 1.2,
      letterSpacing: '-0.005em',
      marginBottom: 14,
    }}>{headline}</div>
    <div style={{ fontSize: 16, lineHeight: 1.55, color: ink, marginBottom: 16, flex: 1 }}>{body}</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderTop: `1px solid ${rule}`, paddingTop: 12 }}>
      <span style={{ width: 6, height: 6, background: navy, display: 'inline-block' }} />
      <span style={{ fontSize: 14, color: navy, fontWeight: 700, letterSpacing: '0.02em' }}>{footer}</span>
    </div>
  </div>
);

const Slide3: Page = () => (
  <div style={fillBase}>
    <Header
      kicker="Investment Thesis · Structural Edge"
      title="Four Structural Advantages. One Uncrowded Market."
      number="03 / 05"
    />

    <div style={{
      marginTop: 22,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 24,
      flex: 1,
    }}>
      <AdvCard
        num="01"
        eyebrow="Generational Supply Curve"
        headline="Owners Aging Out. No Buyer Market."
        body="The owner cohort across the target band is 55–70+ and entering retirement. No organized buyer market exists at this tier — the absence is structural, not cyclical. We are the buyer."
        footer="Sellers come to us. We set price."
      />
      <AdvCard
        num="02"
        eyebrow="AI Meets Rule-Based Work"
        headline="Accounting Is Deterministic. AI Has Matured."
        body="60% of firm headcount sits in bookkeeping and rule-based compliance. AI now handles this work reliably at production cost. The margin opportunity is mechanical — not speculative."
        footer="20% EBITDA → 35–40%."
      />
      <AdvCard
        num="03"
        eyebrow="Zero Institutional Consolidators"
        headline="Nobody Is Bidding. Multiples Reflect It."
        body="No PE-backed consolidator operates at this tier in Israel. No documented M&A activity in the segment. Entry multiples sit 30–50% below comparable US accounting roll-up transactions."
        footer="We buy cheap — because there is no competing buyer."
      />
      <AdvCard
        num="04"
        eyebrow="Haredi Labor as Captive Offshoring"
        headline="Local Labor at Offshore Cost."
        body="The Haredi accounting workforce delivers what India captives deliver for US firms — at lower cost, in native Hebrew, with zero timezone gap and full Israeli tax fluency. A captive labor pool inside the domestic market."
        footer="The 15–30% AI can't automate — covered below market cost."
      />
    </div>

    <div style={{
      marginTop: 20,
      padding: '14px 20px',
      borderTop: `2px solid ${ruleHard}`,
      borderBottom: `1px solid ${ruleHard}`,
      background: offPanel,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 19, color: ink, fontWeight: 700, letterSpacing: '-0.005em' }}>
        Each advantage compounds. None deplete as the platform scales.
      </div>
      <div style={{ fontSize: 13, color: navy, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
        Structural edge · durable, not temporary
      </div>
    </div>

    <Footer
      left="US accounting roll-up comparables: PE-backed platforms (Ascend, Aprio, Citrin Cooperman, Eisner) transacting at 8–12× EBITDA. Israeli target band currently trades at 4–6× normalized EBITDA pre-synergy."
      right="Comparable transactions reviewed include 14 US accounting platform deals 2022–2025."
    />
  </div>
);

// --------------------------------------------------------------------------
// Slide 4 — AI Margin Engine
// --------------------------------------------------------------------------

const AutoBar = ({ pct }: { pct: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <div style={{ width: 200, height: 10, background: offPanel, position: 'relative', border: `1px solid ${rule}` }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${pct}%`, background: navy }} />
      <div style={{ position: 'absolute', left: '50%', top: -3, bottom: -3, width: 1, background: subtle }} />
    </div>
    <div style={{ fontSize: 20, fontWeight: 700, color: ink, fontVariantNumeric: 'tabular-nums', minWidth: 56, textAlign: 'right' }}>
      {pct}%
    </div>
  </div>
);

const ServiceRow = ({
  service,
  pct,
  handles,
  stays,
}: {
  service: string;
  pct: number;
  handles: string;
  stays: string;
}) => (
  <tr>
    <td style={{ padding: '14px 14px 14px 0', borderTop: `1px solid ${rule}`, fontSize: 18, fontWeight: 700, color: ink, verticalAlign: 'middle', width: '20%' }}>
      {service}
    </td>
    <td style={{ padding: '14px 14px', borderTop: `1px solid ${rule}`, verticalAlign: 'middle', width: '26%' }}>
      <AutoBar pct={pct} />
    </td>
    <td style={{ padding: '14px 14px', borderTop: `1px solid ${rule}`, fontSize: 16, color: ink, verticalAlign: 'middle', lineHeight: 1.45, width: '30%' }}>
      {handles}
    </td>
    <td style={{ padding: '14px 0 14px 14px', borderTop: `1px solid ${rule}`, fontSize: 16, color: muted, verticalAlign: 'middle', lineHeight: 1.45, width: '24%' }}>
      {stays}
    </td>
  </tr>
);

const Slide4: Page = () => (
  <div style={fillBase}>
    <Header
      kicker="Margin Engine · AI vs Human · Automation Map"
      title="Where AI actually creates the margin."
      number="04 / 05"
    />

    <div style={{
      marginTop: 18,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 36,
    }}>
      <div style={{ flex: 1, fontSize: 18, lineHeight: 1.55, color: ink, maxWidth: 980 }}>
        Per-service-line automation potential based on US precedent — Botkeeper, Vic.ai, QuickBooks AI — adapted for Israeli regulatory specificity. Bookkeeping and payroll lead. Audit sign-off and advisory interpretation stay human.
      </div>
      <div style={{
        textAlign: 'right',
        borderLeft: `1px solid ${rule}`,
        paddingLeft: 28,
        flexShrink: 0,
      }}>
        <div style={{ fontSize: 11, letterSpacing: '0.24em', color: navy, fontWeight: 700, marginBottom: 4 }}>HEADLINE</div>
        <div style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          color: navy,
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}>~65%</div>
        <div style={{ fontSize: 14, color: ink, marginTop: 6, maxWidth: 340, lineHeight: 1.4 }}>of firm labor hours are <strong>AI-addressable</strong> in the target band</div>
      </div>
    </div>

    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 24 }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: '0 14px 8px 0', fontSize: 11, letterSpacing: '0.22em', color: muted, fontWeight: 700, textTransform: 'uppercase', borderBottom: `1px solid ${ruleHard}`, width: '20%' }}>Service line</th>
          <th style={{ textAlign: 'left', padding: '0 14px 8px 14px', fontSize: 11, letterSpacing: '0.22em', color: muted, fontWeight: 700, textTransform: 'uppercase', borderBottom: `1px solid ${ruleHard}`, width: '26%' }}>Automation</th>
          <th style={{ textAlign: 'left', padding: '0 14px 8px 14px', fontSize: 11, letterSpacing: '0.22em', color: muted, fontWeight: 700, textTransform: 'uppercase', borderBottom: `1px solid ${ruleHard}`, width: '30%' }}>AI handles</th>
          <th style={{ textAlign: 'left', padding: '0 0 8px 14px', fontSize: 11, letterSpacing: '0.22em', color: muted, fontWeight: 700, textTransform: 'uppercase', borderBottom: `1px solid ${ruleHard}`, width: '24%' }}>Human stays</th>
        </tr>
      </thead>
      <tbody>
        <ServiceRow service="Bookkeeping" pct={85} handles="Bank feeds · OCR · reconciliation" stays="Exceptions · client onboarding" />
        <ServiceRow service="VAT reporting" pct={70} handles="Auto-submit · classification" stays="Anomaly review · refund requests" />
        <ServiceRow service="Annual tax return" pct={50} handles="Document collection · return drafting" stays="Planning judgment · sign-off" />
        <ServiceRow service="Payroll & NI" pct={65} handles="Calculations · payments · reconciliation" stays="Exemptions · terminations · edge cases" />
        <ServiceRow service="Financial statements" pct={50} handles="Close · notes generation" stays="CPA review · sign-off" />
        <ServiceRow service="Management reports" pct={60} handles="P&L · cash flow · KPIs" stays="Narrative · advisory interpretation" />
      </tbody>
    </table>

    <div style={{
      marginTop: 20,
      padding: '16px 22px',
      background: navy,
      color: '#fbf9f4',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 32,
    }}>
      <div>
        <div style={{ fontSize: 11, letterSpacing: '0.24em', color: highlightDeep, fontWeight: 700, marginBottom: 4 }}>ADVISORY SERVICES — AI-AUGMENTED, NOT AUTOMATED</div>
        <div style={{ fontSize: 18, lineHeight: 1.45 }}>
          Freed capacity redeploys here. <strong style={{ color: '#fbf9f4' }}>5–10% of revenue → 20–25%</strong>, at <strong style={{ color: '#fbf9f4' }}>3× the billing rate</strong> of compliance work.
        </div>
      </div>
      <div style={{ flexShrink: 0, textAlign: 'right' }}>
        <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 40, fontWeight: 700, color: '#fbf9f4', lineHeight: 1 }}>3×</div>
        <div style={{ fontSize: 12, letterSpacing: '0.18em', color: highlightDeep, fontWeight: 700, marginTop: 4 }}>BILLING RATE LIFT</div>
      </div>
    </div>

    <Footer
      left="Automation percentages reflect deployment potential per service line based on US precedent (Botkeeper, Vic.ai, QuickBooks AI) adapted for Israeli regulatory specificity. Actual realization depends on firm-level data quality and workflow standardization."
      right="Bars sized to deployment potential, not current adoption."
    />
  </div>
);

// --------------------------------------------------------------------------
// Slide 5 — Phase Strategy
// --------------------------------------------------------------------------

const PlatformRow = ({ label, without, withp, target }: { label: string; without: string; withp: string; target?: boolean }) => (
  <tr>
    <td style={{ padding: '14px 18px 14px 0', borderTop: `1px solid ${rule}`, fontSize: 12, letterSpacing: '0.2em', color: muted, fontWeight: 700, textTransform: 'uppercase', verticalAlign: 'middle', width: '26%' }}>
      {label}
    </td>
    <td style={{ padding: '14px 18px', borderTop: `1px solid ${rule}`, fontSize: 18, color: ink, fontWeight: 500, verticalAlign: 'middle', width: '37%' }}>
      {without}
    </td>
    <td style={{ padding: '14px 18px', borderTop: `1px solid ${rule}`, fontSize: 18, color: navy, fontWeight: target ? 700 : 600, background: target ? highlight : 'transparent', verticalAlign: 'middle', width: '37%' }}>
      {withp}
    </td>
  </tr>
);

const Slide5: Page = () => (
  <div style={fillBase}>
    <Header
      kicker="Acquisition Strategy"
      title="Phase Strategy — Build the Platform, Then Compound"
      number="05 / 05"
    />

    {/* Phase bar */}
    <div style={{ marginTop: 26 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.22em', color: muted, fontWeight: 700 }}>PHASED ACQUISITION ARC</div>
        <div style={{ fontSize: 11, letterSpacing: '0.22em', color: muted, fontWeight: 700 }}>NO YEAR LABELS · NO DEAL MARKERS</div>
      </div>
      <div style={{ position: 'relative', height: 96 }}>
        {/* Phase 1 — solid */}
        <div style={{
          position: 'absolute', left: 0, top: 0, width: '40%', height: 64,
          background: navy, display: 'flex', flexDirection: 'column',
          justifyContent: 'center', paddingLeft: 24, color: '#fbf9f4',
        }}>
          <div style={{ fontSize: 12, letterSpacing: '0.22em', color: highlightDeep, fontWeight: 700 }}>PHASE 1 · DEALS 1–3</div>
          <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 24, fontWeight: 700, marginTop: 2 }}>Firm acquisitions</div>
        </div>
        <div style={{ position: 'absolute', left: 0, top: 64, width: '40%', fontSize: 13, color: muted, paddingLeft: 24, marginTop: 8 }}>
          Build the platform — CPA-licensed audit/tax LP, services co., shared rails.
        </div>
        {/* Inflection */}
        <div style={{
          position: 'absolute', left: 'calc(40% - 1px)', top: -8, width: 2, height: 80, background: ruleHard,
        }} />
        <div style={{
          position: 'absolute', left: '40%', top: -28, transform: 'translateX(-50%)',
          fontSize: 10, letterSpacing: '0.26em', color: ruleHard, fontWeight: 800, whiteSpace: 'nowrap',
          background: 'var(--osd-bg)', padding: '0 8px',
        }}>
          ◆ PLATFORM ESTABLISHED
        </div>
        {/* Phase 2 — dashed */}
        <div style={{
          position: 'absolute', left: '40%', top: 0, width: '60%', height: 64,
          border: `2px dashed ${navy}`,
          borderLeft: 'none',
          background: 'repeating-linear-gradient(90deg, transparent 0, transparent 14px, rgba(31,58,95,0.06) 14px, rgba(31,58,95,0.06) 28px)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', paddingLeft: 24,
        }}>
          <div style={{ fontSize: 12, letterSpacing: '0.22em', color: navy, fontWeight: 700 }}>PHASE 2 · DEAL 4+</div>
          <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 24, fontWeight: 700, color: ink, marginTop: 2 }}>Mixed M&amp;A</div>
        </div>
        <div style={{ position: 'absolute', left: '40%', top: 64, width: '60%', fontSize: 13, color: muted, paddingLeft: 24, marginTop: 8 }}>
          Firms add platforms · books add velocity — the rails are paid for.
        </div>
      </div>
    </div>

    {/* Middle table */}
    <div style={{ marginTop: 42 }}>
      <div style={{ fontSize: 12, letterSpacing: '0.24em', color: navy, fontWeight: 800, marginBottom: 10, textTransform: 'uppercase' }}>
        Books Require a Platform to Absorb Them
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th />
            <th style={{ textAlign: 'left', padding: '0 18px 8px 18px', fontSize: 12, letterSpacing: '0.2em', color: muted, fontWeight: 700, textTransform: 'uppercase', borderBottom: `1px solid ${ruleHard}` }}>Without the platform</th>
            <th style={{ textAlign: 'left', padding: '0 18px 8px 18px', fontSize: 12, letterSpacing: '0.2em', color: navy, fontWeight: 700, textTransform: 'uppercase', borderBottom: `2px solid ${navy}` }}>With the platform</th>
          </tr>
        </thead>
        <tbody>
          <PlatformRow label="Book retention" without="50–60%" withp="65%+" target />
          <PlatformRow label="CPA partner signing capacity" without="None" withp="Multiple partners across geographies" />
          <PlatformRow label="Integration" without="Improvised, deal-by-deal" withp="Runs on existing rails" />
        </tbody>
      </table>
    </div>

    {/* Takeaway */}
    <div style={{
      marginTop: 28,
      padding: '22px 24px',
      borderTop: `2px solid ${ruleHard}`,
      borderBottom: `2px solid ${ruleHard}`,
      background: offPanel,
    }}>
      <div style={{ fontSize: 11, letterSpacing: '0.24em', color: navy, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Takeaway</div>
      <div style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 30,
        fontWeight: 700,
        color: ink,
        letterSpacing: '-0.01em',
        lineHeight: 1.25,
      }}>
        “Books are not an alternative to firms. They are what the platform <span style={{ color: navy }}>makes possible</span> — <span style={{ fontStyle: 'italic' }}>after</span> three firm deals build it.”
      </div>
    </div>

    <Footer
      left="Phase 1 deals are operating firms — CPA partners, client books, dual-entity structure. Phase 2 mixes additional firms with stand-alone book purchases bolted onto the established platform."
      right="Sequencing is non-negotiable: book deals before the platform fail on partner signing capacity and retention."
    />
  </div>
);

// --------------------------------------------------------------------------

export const meta: SlideMeta = { title: 'Search Fund Pitch — Israeli Accounting Roll-Up' };
export default [Slide1, Slide2, Slide3, Slide4, Slide5] satisfies Page[];
