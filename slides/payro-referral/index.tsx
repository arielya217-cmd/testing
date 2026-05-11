import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

import payroLogo from './assets/payro-logo.svg';

// ─── Design tokens (panel-tweakable) ────────────────────────────────────────
export const design: DesignSystem = {
  palette: {
    bg: '#F8F6F2',
    text: '#1A2E35',
    accent: '#3B7667',
  },
  fonts: {
    display: '"Trebuchet MS", Tahoma, "Segoe UI", Arial, system-ui, sans-serif',
    body: 'Calibri, "Segoe UI", "Noto Sans Hebrew", Arial, system-ui, sans-serif',
  },
  typeScale: {
    hero: 168,
    body: 36,
  },
  radius: 18,
};

// ─── Brand palette ──────────────────────────────────────────────────────────
const c = {
  primaryTeal: '#3B7667',
  darkTeal: '#00464E',
  darkTealDeep: '#003138',
  mintLight: '#E0F5DB',
  cream: '#F8F6F2',
  softYellow: '#F4F2BC',
  lavender: '#E6EDF6',
  periwinkle: '#97B9FF',
  golden: '#EAE579',
  tealMid: '#A9E6BD',
  textDark: '#1A2E35',
  textBody: '#2D3B3E',
  textMuted: '#5A7A80',
  white: '#FFFFFF',
  surface: '#FFFFFF',
  border: 'rgba(26,46,53,0.08)',
  borderDark: 'rgba(255,255,255,0.12)',
  red: '#E53E3E',
  orange: '#ED8936',
  amber: '#D69E2E',
};

// ─── Shared animations ──────────────────────────────────────────────────────
const anim = `
  @keyframes pr-fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pr-fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes pr-fadeScale {
    from { opacity: 0; transform: scale(0.96); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes pr-slideRight {
    from { opacity: 0; transform: translateX(20px); }
    to   { opacity: 1; transform: translateX(0); }
  }
`;

const fade = (delay = 0): React.CSSProperties => ({
  animation: `pr-fadeUp 700ms ease-out ${delay}ms both`,
});
const fadeIn = (delay = 0): React.CSSProperties => ({
  animation: `pr-fadeIn 800ms ease-out ${delay}ms both`,
});
const fadeScale = (delay = 0): React.CSSProperties => ({
  animation: `pr-fadeScale 700ms ease-out ${delay}ms both`,
});

// ─── Root style ─────────────────────────────────────────────────────────────
const page = (bg: string, color: string): React.CSSProperties => ({
  width: '100%',
  height: '100%',
  background: bg,
  color,
  fontFamily: 'var(--osd-font-body)',
  direction: 'rtl',
  position: 'relative',
  overflow: 'hidden',
});

// ─── Logo component ─────────────────────────────────────────────────────────
const Logo = ({ width = 180, white = false }: { width?: number; white?: boolean }) => (
  <img
    src={payroLogo}
    alt="Payro"
    style={{
      width,
      height: 'auto',
      display: 'block',
      filter: white ? 'brightness(0) invert(1)' : undefined,
    }}
  />
);

const FooterLogo = ({ white = false }: { white?: boolean }) => (
  <div style={{ position: 'absolute', left: 64, bottom: 48, opacity: 0.85 }}>
    <Logo width={120} white={white} />
  </div>
);

// ─── Inline SVG icons (white stroke for teal circle backgrounds) ────────────
const IconUsers = ({ color = '#fff', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconClock = ({ color = '#fff', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 16 14" />
  </svg>
);
const IconCoins = ({ color = '#fff', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="9" cy="7" rx="6" ry="2.5" />
    <path d="M3 7v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V7" />
    <path d="M3 12v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5" />
    <ellipse cx="17" cy="13.5" rx="4" ry="1.8" opacity="0.6" />
  </svg>
);
const IconCog = ({ color = '#fff', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </svg>
);
const IconRocket = ({ color = '#fff', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.75-.9.75-2.25 0-3-.75-.75-2.1-.75-3 0z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.9 12.9 0 0 1 22 2c0 2.7-.8 7-6 10a22 22 0 0 1-4 3z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);
const IconChart = ({ color = '#fff', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <polyline points="7 14 11 10 14 13 20 6" />
    <polyline points="16 6 20 6 20 10" />
  </svg>
);
const IconSearch = ({ color = '#fff', size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
const IconStar = ({ color = '#EAE579', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1" strokeLinejoin="round">
    <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" />
  </svg>
);
const IconArrowLeft = ({ color = '#fff', size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);
const IconCheck = ({ color = '#fff', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconRefresh = ({ color = '#fff', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.5 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.65 4.36A9 9 0 0 0 20.5 15" />
  </svg>
);
const IconDoc = ({ color = '#fff', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);
const IconArrowLong = ({ color = c.primaryTeal, width = 120 }) => (
  <svg width={width} height="40" viewBox="0 0 120 40" fill="none">
    <line x1="116" y1="20" x2="14" y2="20" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <polyline points="22,12 14,20 22,28" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Reusable components ────────────────────────────────────────────────────
const Eyebrow = ({ children, dark = false, style }: { children: React.ReactNode; dark?: boolean; style?: React.CSSProperties }) => (
  <div
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '0.18em',
      color: dark ? c.tealMid : c.primaryTeal,
      textTransform: 'uppercase' as const,
      ...style,
    }}
  >
    {children}
  </div>
);

const PageTitle = ({ children, dark = false, style }: { children: React.ReactNode; dark?: boolean; style?: React.CSSProperties }) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 88,
      fontWeight: 700,
      lineHeight: 1.1,
      margin: 0,
      color: dark ? c.white : c.textDark,
      ...style,
    }}
  >
    {children}
  </h2>
);

const IconCircle = ({
  children,
  size = 104,
  bg = c.primaryTeal,
}: {
  children: React.ReactNode;
  size?: number;
  bg?: string;
}) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxShadow: `0 8px 28px ${bg}33`,
    }}
  >
    {children}
  </div>
);

// ──────────────────────────────────────────────────────────────────────────────
// PAGE 1 — Cover
// ──────────────────────────────────────────────────────────────────────────────
const Cover: Page = () => (
  <div style={page(c.darkTeal, c.white)}>
    <style>{anim}</style>

    {/* Decorative circles */}
    <div
      style={{
        position: 'absolute',
        bottom: -200,
        left: -180,
        width: 620,
        height: 620,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.04)',
        ...fadeIn(200),
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: -160,
        right: -120,
        width: 460,
        height: 460,
        borderRadius: '50%',
        background: 'rgba(169,230,189,0.06)',
        ...fadeIn(400),
      }}
    />

    {/* Logo top-left */}
    <div style={{ position: 'absolute', top: 72, left: 88, ...fadeIn(100) }}>
      <Logo width={200} white />
    </div>

    {/* Right-aligned content (RTL) */}
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: 140,
        transform: 'translateY(-50%)',
        textAlign: 'right' as const,
        maxWidth: 1280,
      }}
    >
      <div
        style={{
          display: 'inline-block',
          padding: '14px 28px',
          background: c.primaryTeal,
          borderRadius: 999,
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: '0.02em',
          color: c.white,
          marginBottom: 56,
          ...fade(150),
        }}
      >
        פיצ'ר חדש — בלעדי ללקוחות Payro
      </div>

      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 200,
          fontWeight: 800,
          lineHeight: 1.0,
          margin: 0,
          letterSpacing: '-0.01em',
          ...fade(300),
        }}
      >
        חבר מביא חבר
      </h1>

      <p
        style={{
          fontSize: 44,
          color: c.tealMid,
          lineHeight: 1.35,
          margin: '40px 0 0 0',
          fontWeight: 400,
          ...fade(500),
        }}
      >
        מנוע גיוס חברתי חכם — ישירות מאפליקציית Payro
      </p>
    </div>

    {/* Bottom-left meta */}
    <div
      style={{
        position: 'absolute',
        bottom: 72,
        left: 88,
        fontSize: 22,
        color: 'rgba(255,255,255,0.55)',
        letterSpacing: '0.08em',
        ...fade(700),
      }}
    >
      הצגת מוצר &nbsp;|&nbsp; 2026
    </div>
  </div>
);

// ──────────────────────────────────────────────────────────────────────────────
// PAGE 2 — The Problem
// ──────────────────────────────────────────────────────────────────────────────
const StatCard = ({
  stat,
  label,
  accent,
  delay,
}: {
  stat: string;
  label: string;
  accent: string;
  delay: number;
}) => (
  <div
    style={{
      flex: 1,
      background: c.white,
      borderRadius: 20,
      boxShadow: '0 12px 32px rgba(26,46,53,0.06)',
      overflow: 'hidden',
      ...fade(delay),
    }}
  >
    <div style={{ height: 8, background: accent }} />
    <div
      style={{
        padding: '56px 48px 52px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        textAlign: 'right' as const,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 76,
          fontWeight: 800,
          color: accent,
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
        }}
      >
        {stat}
      </div>
      <div
        style={{
          marginTop: 28,
          fontSize: 28,
          color: c.textBody,
          lineHeight: 1.4,
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  </div>
);

const Problem: Page = () => (
  <div style={page(c.cream, c.textDark)}>
    <style>{anim}</style>

    <div style={{ padding: '110px 140px 0', textAlign: 'right' as const }}>
      <Eyebrow style={fade(0)}>האתגר</Eyebrow>
      <PageTitle style={{ ...fade(120), marginTop: 18 }}>
        גיוס מסורתי — יקר, איטי ולא מדויק
      </PageTitle>
    </div>

    <div
      style={{
        position: 'absolute',
        top: 380,
        right: 140,
        left: 140,
        display: 'flex',
        gap: 40,
      }}
    >
      <StatCard stat="₪5,000–₪8,000" label="עלות גיוס ממוצעת לעובד שעתי" accent={c.red} delay={250} />
      <StatCard stat="3–6 שבועות" label="זמן איוש ממוצע של משרה" accent={c.orange} delay={400} />
      <StatCard stat="~50%" label="תחלופה שנתית בקמעונאות" accent={c.amber} delay={550} />
    </div>

    <div
      style={{
        position: 'absolute',
        bottom: 130,
        right: 140,
        left: 140,
        textAlign: 'right' as const,
        fontSize: 30,
        color: c.textBody,
        lineHeight: 1.5,
        ...fade(750),
      }}
    >
      לוחות מודעות, פלטפורמות גיוס ומודעות פייסבוק — יקרים, לא ממוקדים, ובלי סינון חברתי.
    </div>

    <FooterLogo />
  </div>
);

// ──────────────────────────────────────────────────────────────────────────────
// PAGE 3 — The Solution
// ──────────────────────────────────────────────────────────────────────────────
const BenefitRow = ({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 36,
      ...fade(delay),
    }}
  >
    <IconCircle>{icon}</IconCircle>
    <div style={{ textAlign: 'right' as const, flex: 1 }}>
      <div
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 40,
          fontWeight: 700,
          color: c.textDark,
          lineHeight: 1.15,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 26,
          color: c.textMuted,
          lineHeight: 1.45,
          marginTop: 10,
        }}
      >
        {desc}
      </div>
    </div>
  </div>
);

const Solution: Page = () => (
  <div style={page(c.cream, c.textDark)}>
    <style>{anim}</style>

    <div style={{ padding: '100px 140px 0', textAlign: 'right' as const }}>
      <Eyebrow style={fade(0)}>הפתרון</Eyebrow>
      <PageTitle style={{ ...fade(120), marginTop: 18 }}>
        למה גיוס חברתי עובד טוב יותר?
      </PageTitle>
    </div>

    <div
      style={{
        position: 'absolute',
        top: 340,
        right: 140,
        left: 140,
        display: 'flex',
        gap: 70,
        alignItems: 'stretch',
      }}
    >
      {/* Benefit rows (right column in RTL = appears first visually) */}
      <div
        style={{
          flex: 1.05,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 48,
        }}
      >
        <BenefitRow
          icon={<IconUsers />}
          title="גיוס איכותי"
          desc="מועמדים עם המלצה אישית — מתחברים מהר, נשארים יותר"
          delay={250}
        />
        <BenefitRow
          icon={<IconClock />}
          title="מהיר ×4"
          desc="סיכוי גיוס גבוה פי 4 ממועמד מפלטפורמה"
          delay={400}
        />
        <BenefitRow
          icon={<IconCoins />}
          title="50% חיסכון"
          desc="חצי מעלות הגיוס המסורתי"
          delay={550}
        />
      </div>

      {/* Big stat block (left column in RTL = visually second) */}
      <div
        style={{
          flex: 0.85,
          background: c.mintLight,
          borderRadius: 28,
          padding: '56px 48px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center' as const,
          ...fadeScale(700),
        }}
      >
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 224,
            fontWeight: 800,
            color: c.primaryTeal,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
          }}
        >
          40%
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: c.textBody,
            lineHeight: 1.4,
            fontWeight: 500,
            maxWidth: 380,
          }}
        >
          שיפור בשימור עובדים שהגיעו דרך הפניה
        </div>
      </div>
    </div>

    <FooterLogo />
  </div>
);

// ──────────────────────────────────────────────────────────────────────────────
// PAGE 4 — Employee App View
// ──────────────────────────────────────────────────────────────────────────────
const JobCardMock = ({ title, location }: { title: string; location: string }) => (
  <div
    style={{
      background: c.white,
      borderRadius: 14,
      padding: '16px 18px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}
  >
    <div style={{ textAlign: 'right' as const }}>
      <div style={{ fontSize: 17, fontWeight: 700, color: c.textDark, lineHeight: 1.2 }}>
        {title}
      </div>
      <div style={{ fontSize: 13, color: c.textMuted, marginTop: 4 }}>{location}</div>
    </div>
    <div
      style={{
        background: c.primaryTeal,
        color: c.white,
        borderRadius: 8,
        padding: '8px 12px',
        fontSize: 13,
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
      }}
    >
      <span>שלח לחבר</span>
      <IconArrowLeft size={14} />
    </div>
  </div>
);

const CalloutLine = ({ text, delay, num }: { text: string; delay: number; num: string }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 24,
      ...fade(delay),
    }}
  >
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: c.tealMid,
        color: c.darkTeal,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--osd-font-display)',
        fontWeight: 800,
        fontSize: 26,
        flexShrink: 0,
      }}
    >
      {num}
    </div>
    <div
      style={{
        fontSize: 30,
        color: c.white,
        lineHeight: 1.4,
        textAlign: 'right' as const,
        paddingTop: 6,
      }}
    >
      {text}
    </div>
  </div>
);

const EmployeeView: Page = () => (
  <div style={page(c.darkTeal, c.white)}>
    <style>{anim}</style>

    {/* Decorative blur */}
    <div
      style={{
        position: 'absolute',
        top: -120,
        left: -120,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'rgba(169,230,189,0.07)',
      }}
    />

    <div style={{ padding: '90px 140px 0', textAlign: 'right' as const }}>
      <Eyebrow dark style={fade(0)}>
        מה העובד רואה
      </Eyebrow>
      <PageTitle dark style={{ ...fade(120), marginTop: 18 }}>
        חוויית העובד באפליקציה
      </PageTitle>
    </div>

    {/* Layout: phone on left, callouts on right */}
    <div
      style={{
        position: 'absolute',
        top: 320,
        right: 140,
        left: 140,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 60,
      }}
    >
      {/* Callouts (right side, RTL leading) */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 56,
          maxWidth: 720,
        }}
      >
        <CalloutLine num="1" text="רואה משרות פתוחות בזמן אמת" delay={500} />
        <CalloutLine num="2" text="שולח לינק לחבר בלחיצה אחת — וואטסאפ, SMS, כל ערוץ" delay={650} />
        <CalloutLine num="3" text="עוקב אחרי סטטוס ההפניות והבונוסים" delay={800} />
      </div>

      {/* Phone mockup */}
      <div
        style={{
          width: 380,
          height: 760,
          background: '#0A1F23',
          borderRadius: 44,
          padding: 12,
          boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
          flexShrink: 0,
          ...fadeScale(300),
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: c.cream,
            borderRadius: 34,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Status bar / Header */}
          <div
            style={{
              background: c.primaryTeal,
              color: c.white,
              padding: '24px 22px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Logo width={70} white />
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconSearch size={15} />
              </div>
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, textAlign: 'right' as const }}>
              משרות פתוחות
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: '16px 16px 0', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
            <JobCardMock title="קופאי/ת" location="סניף תל אביב" />
            <JobCardMock title="סדרן/ית" location="סניף חיפה" />

            {/* Referral status card */}
            <div
              style={{
                background: c.mintLight,
                borderRadius: 14,
                padding: '14px 16px',
                marginTop: 4,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <IconStar />
                <div style={{ fontSize: 15, fontWeight: 700, color: c.textDark }}>
                  ההפניות שלי
                </div>
              </div>
              <div style={{ fontSize: 13, color: c.textBody, textAlign: 'right' as const }}>
                2 התקבלו &nbsp;·&nbsp; 1 בטיפול
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              background: c.darkTeal,
              color: c.white,
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            <span style={{ fontSize: 16 }}>💰</span>
            <span>הבונוסים שלי</span>
          </div>
        </div>
      </div>
    </div>

    <FooterLogo white />
  </div>
);

// ──────────────────────────────────────────────────────────────────────────────
// PAGE 5 — Employer Dashboard View
// ──────────────────────────────────────────────────────────────────────────────
const DashStatCard = ({ value, label, accent }: { value: string; label: string; accent?: string }) => (
  <div
    style={{
      flex: 1,
      background: c.white,
      borderRadius: 10,
      padding: '16px 14px',
      border: `1px solid ${c.border}`,
      textAlign: 'right' as const,
      borderTop: accent ? `3px solid ${accent}` : `1px solid ${c.border}`,
    }}
  >
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 34,
        fontWeight: 800,
        color: c.primaryTeal,
        lineHeight: 1,
      }}
    >
      {value}
    </div>
    <div style={{ fontSize: 14, color: c.textMuted, marginTop: 6 }}>{label}</div>
  </div>
);

const StatusPill = ({ kind }: { kind: 'check' | 'pending' | 'review' }) => {
  const map = {
    check: { bg: '#22C55E', icon: <IconCheck size={14} />, label: 'התקבל' },
    pending: { bg: '#EAB308', icon: <IconRefresh size={14} />, label: 'בתהליך' },
    review: { bg: '#94A3B8', icon: <IconDoc size={14} />, label: 'בבדיקה' },
  }[kind];
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: map.bg,
        color: c.white,
        padding: '4px 10px',
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 600,
      }}
    >
      {map.icon}
      <span>{map.label}</span>
    </div>
  );
};

const TableRow = ({
  candidate,
  referrer,
  role,
  status,
  alt,
}: {
  candidate: string;
  referrer: string;
  role: string;
  status: 'check' | 'pending' | 'review';
  alt: boolean;
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1.4fr 1.4fr 1.2fr 1fr',
      padding: '14px 22px',
      background: alt ? '#F8FAFB' : c.white,
      fontSize: 16,
      color: c.textDark,
      alignItems: 'center',
      textAlign: 'right' as const,
      borderBottom: `1px solid ${c.border}`,
    }}
  >
    <div style={{ fontWeight: 600 }}>{candidate}</div>
    <div style={{ color: c.textMuted }}>{referrer}</div>
    <div>{role}</div>
    <div>
      <StatusPill kind={status} />
    </div>
  </div>
);

const SideCallout = ({ text, delay }: { text: string; delay: number }) => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', ...fade(delay) }}>
    <div
      style={{
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: c.primaryTeal,
        marginTop: 12,
        flexShrink: 0,
      }}
    />
    <div style={{ fontSize: 26, lineHeight: 1.4, color: c.textBody, textAlign: 'right' as const }}>
      {text}
    </div>
  </div>
);

const EmployerView: Page = () => (
  <div style={page(c.cream, c.textDark)}>
    <style>{anim}</style>

    <div style={{ padding: '90px 140px 0', textAlign: 'right' as const }}>
      <Eyebrow style={fade(0)}>מה המעסיק רואה</Eyebrow>
      <PageTitle style={{ ...fade(120), marginTop: 18 }}>
        דשבורד HR — הכל במקום אחד
      </PageTitle>
    </div>

    <div
      style={{
        position: 'absolute',
        top: 320,
        right: 140,
        left: 140,
        display: 'flex',
        gap: 48,
        alignItems: 'stretch',
      }}
    >
      {/* Side callouts (right, leading in RTL) */}
      <div
        style={{
          width: 360,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 40,
          flexShrink: 0,
        }}
      >
        <SideCallout text="ניהול כל המשרות והמועמדים במקום אחד" delay={500} />
        <SideCallout text="מעקב real-time אחרי הפניות, קבלות ודחיות" delay={650} />
        <SideCallout text="ייצוא דוחות ובקרה מלאה על בונוסים" delay={800} />
      </div>

      {/* Dashboard mockup */}
      <div
        style={{
          flex: 1,
          background: c.white,
          borderRadius: 20,
          border: `1px solid ${c.border}`,
          boxShadow: '0 20px 50px rgba(26,46,53,0.08)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          ...fadeScale(300),
        }}
      >
        {/* Top bar */}
        <div
          style={{
            background: c.darkTeal,
            color: c.white,
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
          </div>
          <div>Payro · חבר מביא חבר — דשבורד ניהול</div>
        </div>

        <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* Stats row */}
          <div style={{ display: 'flex', gap: 14 }}>
            <DashStatCard value="12" label="הפניות פעילות" accent={c.primaryTeal} />
            <DashStatCard value="8" label="ראיון נקבע" accent={c.periwinkle} />
            <DashStatCard value="3" label="התקבלו" accent="#22C55E" />
            <DashStatCard value="1" label="נדחו" accent="#94A3B8" />
          </div>

          {/* Table */}
          <div style={{ border: `1px solid ${c.border}`, borderRadius: 10, overflow: 'hidden' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 1.4fr 1.2fr 1fr',
                padding: '14px 22px',
                background: '#EEF3F2',
                fontSize: 14,
                fontWeight: 700,
                color: c.textMuted,
                textAlign: 'right' as const,
                letterSpacing: '0.02em',
              }}
            >
              <div>שם מועמד</div>
              <div>מפנה</div>
              <div>משרה</div>
              <div>סטטוס</div>
            </div>
            <TableRow candidate="יוסי כהן" referrer="דנה לוי" role="קופאי" status="check" alt={false} />
            <TableRow candidate="מיכל אברהם" referrer="רון שמש" role="סדרן" status="pending" alt={true} />
            <TableRow candidate="אורי דוד" referrer="שרה גולן" role="מעדנייה" status="review" alt={false} />
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-start' }}>
            <div
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                background: c.primaryTeal,
                color: c.white,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              ייצוא דוח
            </div>
            <div
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                border: `1px solid ${c.border}`,
                fontSize: 14,
                color: c.textBody,
                fontWeight: 600,
              }}
            >
              הוספת משרה
            </div>
            <div
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                border: `1px solid ${c.border}`,
                fontSize: 14,
                color: c.textBody,
                fontWeight: 600,
              }}
            >
              הגדרות בונוס
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterLogo />
  </div>
);

// ──────────────────────────────────────────────────────────────────────────────
// PAGE 6 — Implementation
// ──────────────────────────────────────────────────────────────────────────────
const StepCard = ({
  num,
  icon,
  title,
  desc,
  delay,
}: {
  num: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) => (
  <div
    style={{
      flex: 1,
      background: c.white,
      borderRadius: 24,
      padding: '44px 36px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center' as const,
      boxShadow: '0 12px 32px rgba(0,70,78,0.08)',
      position: 'relative',
      ...fade(delay),
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 18,
        right: 24,
        fontFamily: 'var(--osd-font-display)',
        fontSize: 56,
        fontWeight: 800,
        color: c.tealMid,
        lineHeight: 1,
        opacity: 0.6,
      }}
    >
      {num}
    </div>
    <IconCircle size={104}>{icon}</IconCircle>
    <div
      style={{
        marginTop: 28,
        fontFamily: 'var(--osd-font-display)',
        fontSize: 38,
        fontWeight: 700,
        color: c.textDark,
      }}
    >
      {title}
    </div>
    <div
      style={{
        marginTop: 14,
        fontSize: 24,
        color: c.textBody,
        lineHeight: 1.45,
        maxWidth: 320,
      }}
    >
      {desc}
    </div>
  </div>
);

const Implementation: Page = () => (
  <div style={page(c.mintLight, c.textDark)}>
    <style>{anim}</style>

    <div style={{ padding: '100px 140px 0', textAlign: 'right' as const }}>
      <PageTitle style={fade(0)}>הטמעה תוך 10 דקות</PageTitle>
      <p
        style={{
          fontSize: 32,
          color: c.textBody,
          margin: '16px 0 0 0',
          ...fade(150),
        }}
      >
        ללא צורך בפיתוח מצדכם — Payro מטפלת בהכל
      </p>
    </div>

    {/* Steps row (RTL: step 1 on right) */}
    <div
      style={{
        position: 'absolute',
        top: 360,
        right: 140,
        left: 140,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <StepCard num="1" icon={<IconCog />} title="הגדרה" desc="בוחרים משרות, קובעים בונוס, מעלים לוגו" delay={300} />
      <div style={{ flex: 0.18, display: 'flex', justifyContent: 'center', ...fade(450) }}>
        <IconArrowLong color={c.primaryTeal} width={100} />
      </div>
      <StepCard num="2" icon={<IconRocket />} title="השקה" desc="העובדים רואים את המשרות באפליקציה מיד" delay={500} />
      <div style={{ flex: 0.18, display: 'flex', justifyContent: 'center', ...fade(650) }}>
        <IconArrowLong color={c.primaryTeal} width={100} />
      </div>
      <StepCard num="3" icon={<IconChart />} title="ניהול" desc="עוקבים אחרי הפניות בדשבורד ומקבלים דוחות" delay={700} />
    </div>

    {/* Bottom highlight */}
    <div
      style={{
        position: 'absolute',
        bottom: 90,
        right: 140,
        left: 140,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: c.primaryTeal,
          color: c.white,
          padding: '20px 48px',
          borderRadius: 999,
          fontSize: 26,
          fontWeight: 600,
          letterSpacing: '0.01em',
          ...fade(900),
        }}
      >
        Payro מטפלת בפיתוח, עיצוב, הטמעה ותמיכה שוטפת
      </div>
    </div>
  </div>
);

// ──────────────────────────────────────────────────────────────────────────────
// PAGE 7 — Pricing
// ──────────────────────────────────────────────────────────────────────────────
const Pricing: Page = () => (
  <div style={page(c.cream, c.textDark)}>
    <style>{anim}</style>

    <div style={{ padding: '90px 140px 0', textAlign: 'right' as const }}>
      <Eyebrow style={fade(0)}>תמחור</Eyebrow>
      <PageTitle style={{ ...fade(120), marginTop: 18 }}>
        מחיר ותנאים
      </PageTitle>
    </div>

    {/* Pricing card centered */}
    <div
      style={{
        position: 'absolute',
        top: 320,
        right: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 720,
          background: c.white,
          border: `3px solid ${c.primaryTeal}`,
          borderRadius: 28,
          padding: '40px 48px 44px',
          textAlign: 'center' as const,
          boxShadow: '0 24px 56px rgba(59,118,103,0.18)',
          ...fadeScale(250),
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '8px 22px',
            background: c.mintLight,
            color: c.primaryTeal,
            borderRadius: 999,
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: '0.04em',
          }}
        >
          תשלום חודשי
        </div>

        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 152,
            fontWeight: 800,
            color: c.primaryTeal,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            marginTop: 16,
          }}
        >
          ₪2,500
        </div>
        <div style={{ fontSize: 22, color: c.textMuted, marginTop: 4 }}>לחודש</div>

        <div
          style={{
            height: 1,
            background: c.border,
            margin: '28px 0 24px',
          }}
        />

        <div style={{ fontSize: 26, fontWeight: 700, color: c.textDark }}>
          סה"כ לפיילוט (3 חודשים):{' '}
          <span style={{ color: c.primaryTeal }}>₪7,500</span>
        </div>
      </div>
    </div>

    {/* Terms list */}
    <div
      style={{
        position: 'absolute',
        bottom: 110,
        right: 140,
        left: 140,
        textAlign: 'right' as const,
        color: c.textMuted,
        fontSize: 22,
        lineHeight: 1.7,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        columnGap: 56,
        rowGap: 4,
        ...fade(550),
      }}
    >
      <div>•&nbsp; כולל עד 20 משרות פעילות</div>
      <div>•&nbsp; כל משרה נוספת: ₪50/חודש</div>
      <div>•&nbsp; 10% הנחה בתשלום מראש (₪6,750 במקום ₪7,500)</div>
      <div>•&nbsp; לאחר הפיילוט — הארכה לשנה בתנאים מוסכמים</div>
      <div style={{ gridColumn: '1 / -1' }}>•&nbsp; כולל: פיתוח, עיצוב, הטמעה ותמיכה שוטפת</div>
    </div>

    <FooterLogo />
  </div>
);

// ──────────────────────────────────────────────────────────────────────────────
// PAGE 8 — Closing / CTA
// ──────────────────────────────────────────────────────────────────────────────
const Closing: Page = () => (
  <div style={page(c.darkTeal, c.white)}>
    <style>{anim}</style>

    {/* Decorative circles */}
    <div
      style={{
        position: 'absolute',
        top: -180,
        left: -160,
        width: 540,
        height: 540,
        borderRadius: '50%',
        background: 'rgba(169,230,189,0.06)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        bottom: -200,
        right: -180,
        width: 580,
        height: 580,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.04)',
      }}
    />

    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center' as const,
        padding: '0 140px',
      }}
    >
      <div style={fadeIn(100)}>
        <Logo width={280} white />
      </div>

      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 164,
          fontWeight: 800,
          lineHeight: 1.05,
          margin: '56px 0 0 0',
          letterSpacing: '-0.01em',
          ...fade(250),
        }}
      >
        מוכנים להתחיל?
      </h1>

      <p
        style={{
          fontSize: 40,
          color: c.tealMid,
          margin: '32px 0 0 0',
          fontWeight: 400,
          ...fade(450),
        }}
      >
        הפיילוט הראשון live תוך 10 דקות
      </p>

      <div
        style={{
          marginTop: 64,
          display: 'flex',
          gap: 56,
          fontSize: 30,
          color: c.white,
          ...fade(650),
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: c.tealMid }}>✉</span>
          <span>sagim@payro.io</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: c.tealMid }}>↗</span>
          <span>www.payro.io</span>
        </div>
      </div>

      <div
        style={{
          marginTop: 80,
          fontSize: 22,
          color: 'rgba(169,230,189,0.7)',
          fontStyle: 'italic' as const,
          letterSpacing: '0.04em',
          ...fade(850),
        }}
      >
        Payro — הפתרון הפשוט לאתגר כח האדם
      </div>
    </div>
  </div>
);

// ──────────────────────────────────────────────────────────────────────────────
export const meta: SlideMeta = { title: 'Payro · חבר מביא חבר' };
export default [
  Cover,
  Problem,
  Solution,
  EmployeeView,
  EmployerView,
  Implementation,
  Pricing,
  Closing,
] satisfies Page[];
