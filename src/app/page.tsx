import Image from "next/image";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main style={{ backgroundColor: '#FDFDFD', overflow: 'hidden' }}>
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          height: '5567px',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          backgroundColor: '#FDFDFD',
          paddingRight: '20px',
          paddingLeft: '20px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '121px',
            left: '816px',
            width: '538px',
            height: '500px',
            borderRadius: '20px',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
            zIndex: 1,
          }}
        >
          <Image
            src="/images/hero-woman-yoga.jpg"
            alt="Hero Woman"
            width={538}
            height={500}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        
        {/* Rectangle with Background and Noise */}
        <div
          style={{
            position: 'absolute',
            top: '225px',
            left: '675px',
            width: '254px',
            height: '202px',
            borderRadius: '10px',
            backgroundColor: '#BE9B8433',
            opacity: 1,
            transform: 'rotate(0deg)',
            zIndex: 99,
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '10px',
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.35'/%3E%3C/svg%3E")`,
              backgroundSize: '0.5px 0.5px',
              mixBlendMode: 'multiply',
              pointerEvents: 'none',
            }}
          />
        </div>
        
        {/* Headline Text */}
        <h1
        style={{
            position: 'absolute',
            top: '144px',
            left: '66px',
            width: '695px',
            height: '240px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '60px',
            lineHeight: '80px',
            letterSpacing: '-6%',
            color: '#5C4737',
          }}
        >
          You Don't Have to Say Who You Are to<br />Start Feeling Better
            </h1>
        
        {/* Line below headline */}
        <div
          style={{
            position: 'absolute',
            top: '383px',
            left: '90px',
            width: '502px',
            height: '1px',
            borderTop: '3px solid #000000',
          }}
        />
        
        {/* Description Text */}
        <p
          style={{
            position: 'absolute',
            top: '408px',
            left: '66px',
            width: '444px',
            height: '70px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '35px',
            letterSpacing: '-3%',
            color: '#0D0D0D',
          }}
        >
          No bookings, No waiting, No judgement. Just real help, right when you need it.
        </p>
        
        {/* Start Chat Now Button */}
        <button
          style={{
            position: 'absolute',
            top: '498px',
            left: '66px',
            width: '212px',
            height: '60px',
            backgroundColor: '#967B6A',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            paddingLeft: '24px',
            paddingRight: '24px',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '21px',
              left: '24px',
              width: '112px',
              height: '19px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '-3%',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
                Start Chat Now
          </span>
          
          {/* Circle */}
          <div
            style={{
              position: 'absolute',
              top: '5px',
              left: '157px',
              width: '50px',
              height: '50px',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Arrow */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{
                transform: 'rotate(-45deg)',
              }}
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#967B6A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        
        {/* Download the App Button */}
        <button
          style={{
            position: 'absolute',
            top: '498px',
            left: '298px',
            width: '235px',
            height: '60px',
            backgroundColor: '#967B6A',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '21px',
              left: '24px',
              width: '134px',
              height: '19px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '-3%',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
                Download the App
          </span>
          
          {/* Circle */}
          <div
            style={{
              position: 'absolute',
              top: '5px',
              left: '180px',
              width: '50px',
              height: '50px',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Arrow */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{
                transform: 'rotate(-45deg)',
              }}
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#967B6A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            </div>
        </button>
        
        {/* Your safe space text */}
        <p
          style={{
            position: 'absolute',
            top: '578px',
            left: '66px',
            width: '265px',
            height: '19px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            whiteSpace: 'nowrap',
          }}
        >
          Your safe space is just one tap away!
        </p>
        
        {/* MIND A LOT Text */}
        <div
          style={{
            position: 'absolute',
            top: '641px',
            left: '65px',
            width: '1270px',
            height: '242px',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 600,
              fontSize: '200px',
              lineHeight: '100%',
              letterSpacing: '0.06em',
              textAlign: 'center',
              color: '#967B6A',
              whiteSpace: 'nowrap',
            }}
          >
            MIND A LOT
          </span>
          </div>
        
        {/* Left Image */}
        <div
          style={{
            position: 'absolute',
            top: '899px',
            left: '66px',
            width: '464px',
            height: '214px',
            borderRadius: '20px',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/left.jpg"
            alt="Left Image"
            width={464}
            height={214}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        
        {/* Rectangle between images */}
        <div
          style={{
            position: 'absolute',
            top: '899px',
            left: '550px',
            width: '300px',
            height: '214px',
            borderRadius: '10px',
            border: '1px solid #000000',
            backgroundColor: '#BE9B8433',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Text: Nearly 1 in 7 people worldwide experience a mental stress */}
        <p
          style={{
            position: 'absolute',
            top: '919px',
            left: '570px',
            width: '260px',
            height: '105px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '35px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          &quot;Nearly 1 in 7 people worldwide experience a mental stress&quot;
        </p>
        
        {/* Text: World Health Organization */}
        <p
          style={{
            position: 'absolute',
            top: '1074px',
            left: '600px',
            width: '201px',
            height: '19px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '-3%',
            color: '#755840',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          - World Health Organization
        </p>
        
        {/* Arrow 1 */}
        <div
          style={{
            position: 'absolute',
            top: '273px',
            left: '859.77px',
            width: '35.00000014290124px',
            height: '0px',
            borderTop: '2px solid #755840',
            opacity: 1,
            transform: 'rotate(-119.5deg)',
            transformOrigin: 'left center',
            zIndex: 21,
          }}
        />
        
        {/* Text: Mind A Lot is an anonymous... */}
        <p
          style={{
            position: 'absolute',
            top: '311px',
            left: '691px',
            width: '204px',
            height: '100px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '25px',
            letterSpacing: '-0.03em',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            zIndex: 21,
          }}
        >
          Mind A Lot is an anonymous, app-based counselling platform that connects you instantly to a real, trained professional
        </p>
        
        {/* Star 1 */}
        <div
          style={{
            position: 'absolute',
            top: '566px',
            left: '1094px',
            width: '30px',
            height: '30px',
            borderRadius: '1px',
            opacity: 1,
            transform: 'rotate(0deg)',
            zIndex: 21,
          }}
        >
          <Image
            src="/icons/Star 1.png"
            alt="Star"
            width={30}
            height={30}
            style={{
              objectFit: 'contain',
            }}
          />
              </div>
        
        {/* Rectangle 28 */}
        <div
          style={{
            position: 'absolute',
            top: '561px',
            left: '1087px',
            width: '247px',
            height: '40px',
            borderRadius: '20px',
            backgroundColor: '#BE9B8433',
            backdropFilter: 'blur(25px)',
            opacity: 1,
            transform: 'rotate(0deg)',
            zIndex: 20,
          }}
        />
        
        {/* Text: Rediscover Your Inner Peace */}
        <p
          style={{
            position: 'absolute',
            top: '572px',
            left: '1134px',
            width: '179px',
            height: '17px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '100%',
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            zIndex: 21,
            whiteSpace: 'nowrap',
          }}
        >
          Rediscover Your Inner Peace
        </p>
        
        {/* Right Image */}
        <div
          style={{
            position: 'absolute',
            top: '899px',
            left: '870px',
            width: '464px',
            height: '214px',
            borderRadius: '20px',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/right.jpg"
            alt="Right Image"
            width={464}
            height={214}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          </div>
        
        {/* What Makes Us Different ? */}
        <h2
          style={{
            position: 'absolute',
            top: '1208px',
            left: '66px',
            width: '570px',
            height: '61px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '50px',
            lineHeight: '100%',
            letterSpacing: '-6%',
            color: '#5C4737',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          What Makes Us Different ?
          </h2>
        
        {/* 01 Text */}
        <span
          style={{
            position: 'absolute',
            top: '1319px',
            left: '66px',
            width: '53px',
            height: '61px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '50px',
            lineHeight: '100%',
            color: '#967B6A',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'inline-block',
          }}
        >
          01
        </span>
        
        {/* Line below 01 */}
        <div
          style={{
            position: 'absolute',
            top: '1392px',
            left: '66px',
            width: '410px',
            height: '0px',
            borderTop: '2px solid #000000D9',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Instant Human Support */}
        <p
          style={{
            position: 'absolute',
            top: '1412px',
            left: '66px',
            width: '256px',
            height: '29px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '100%',
            letterSpacing: '-3%',
            color: '#5C4737',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Instant Human Support
        </p>
        
        {/* Description below 01 */}
        <p
          style={{
            position: 'absolute',
            top: '1453px',
            left: '66px',
            width: '410px',
            height: '75px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '25px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          Start chatting the moment you feel overwhelmed. No forms, No queues, No matching wait. A real counsellor responds in seconds.
        </p>
        
        {/* 02 Text */}
        <span
          style={{
            position: 'absolute',
            top: '1319px',
            left: '496px',
            width: '60px',
            height: '61px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '50px',
            lineHeight: '100%',
            color: '#967B6A',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'inline-block',
          }}
        >
          02
        </span>
        
        {/* Line below 02 */}
        <div
          style={{
            position: 'absolute',
            top: '1392px',
            left: '496px',
            width: '410px',
            height: '0px',
            borderTop: '2px solid #000000D9',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* 100% Anonymous */}
        <p
          style={{
            position: 'absolute',
            top: '1412px',
            left: '496px',
            width: '256px',
            height: '29px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '100%',
            letterSpacing: '-3%',
            color: '#967B6A',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          100% Anonymous
        </p>
        
        {/* Description below 02 */}
        <p
          style={{
            position: 'absolute',
            top: '1453px',
            left: '496px',
            width: '403px',
            height: '75px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '25px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          You can choose a nickname. Your real identity stays private. Even your counsellors won't know who you are. Feel safe, share freely.
        </p>
        
        {/* 03 Text */}
        <span
          style={{
            position: 'absolute',
            top: '1319px',
            left: '926px',
            width: '62px',
            height: '61px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '50px',
            lineHeight: '100%',
            color: '#967B6A',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'inline-block',
          }}
        >
          03
        </span>
        
        {/* Line below 03 */}
        <div
          style={{
            position: 'absolute',
            top: '1392px',
            left: '926px',
            width: '410px',
            height: '0px',
            borderTop: '2px solid #000000D9',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Flexible Access */}
        <p
          style={{
            position: 'absolute',
            top: '1412px',
            left: '926px',
            width: '256px',
            height: '29px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '100%',
            letterSpacing: '-3%',
            color: '#967B6A',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          Flexible Access
        </p>
        
        {/* Description below 03 */}
        <p
          style={{
            position: 'absolute',
            top: '1453px',
            left: '926px',
            width: '410px',
            height: '75px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '25px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          Want to choose your own counsellor? Prefer video or voice? You can book that — all on your terms. Connect in the way that feels most comfortable for you.
        </p>
        
        {/* 04 Text */}
        <span
          style={{
            position: 'absolute',
            top: '1578px',
            left: '66px',
            width: '62px',
            height: '61px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '50px',
            lineHeight: '100%',
            color: '#967B6A',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'inline-block',
          }}
        >
          04
        </span>
        
        {/* Line below 04 */}
        <div
          style={{
            position: 'absolute',
            top: '1651px',
            left: '66px',
            width: '410px',
            height: '0px',
            borderTop: '2px solid #000000D9',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Goal-Based Nudges */}
        <p
          style={{
            position: 'absolute',
            top: '1671px',
            left: '66px',
            width: '256px',
            height: '29px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '100%',
            letterSpacing: '-3%',
            color: '#967B6A',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          Goal-Based Nudges
        </p>
        
        {/* Description below 04 */}
        <p
          style={{
            position: 'absolute',
            top: '1712px',
            left: '66px',
            width: '410px',
            height: '75px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '25px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          Set your personal growth goals inside the app. We send you tiny, doable nudges to help you stay on track — one gentle step at a time.
        </p>
        
        {/* 05 Text */}
        <span
          style={{
            position: 'absolute',
            top: '1578px',
            left: '496px',
            width: '61px',
            height: '61px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '50px',
            lineHeight: '100%',
            color: '#967B6A',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'inline-block',
          }}
        >
          05
        </span>
        
        {/* Line below 05 */}
        <div
          style={{
            position: 'absolute',
            top: '1651px',
            left: '496px',
            width: '410px',
            height: '0px',
            borderTop: '2px solid #000000D9',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Mood Tracker */}
        <p
          style={{
            position: 'absolute',
            top: '1671px',
            left: '496px',
            width: '256px',
            height: '29px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '100%',
            letterSpacing: '-3%',
            color: '#967B6A',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          Mood Tracker
        </p>
        
        {/* Description below 05 */}
        <p
          style={{
            position: 'absolute',
            top: '1712px',
            left: '496px',
            width: '410px',
            height: '75px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '25px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          Just tap how you're feeling. We'll guide you from there. No mood history shown — because your past doesn't need to hurt you again.
        </p>
        
        {/* 06 Text */}
        <span
          style={{
            position: 'absolute',
            top: '1578px',
            left: '926px',
            width: '62px',
            height: '61px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '50px',
            lineHeight: '100%',
            color: '#967B6A',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'inline-block',
          }}
        >
          06
        </span>
        
        {/* Line below 06 */}
        <div
          style={{
            position: 'absolute',
            top: '1651px',
            left: '926px',
            width: '410px',
            height: '0px',
            borderTop: '2px solid #000000D9',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Self-Discovery & Growth Tools */}
        <p
          style={{
            position: 'absolute',
            top: '1671px',
            left: '926px',
            width: '256px',
            height: '29px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '100%',
            letterSpacing: '-3%',
            color: '#967B6A',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Self-Discovery & Growth Tools
        </p>
        
        {/* Description below 06 */}
        <p
          style={{
            position: 'absolute',
            top: '1712px',
            left: '926px',
            width: '410px',
            height: '100px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '25px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          Quick self-assessments, expert-curated videos, podcasts and real-life stories — all designed to help you understand your patterns, habits, stressors, and emotional needs, whenever you need clarity or a companion.
        </p>
        
        {/* Who it's For ? */}
        <h2
          style={{
            position: 'absolute',
            top: '1912px',
            left: '559px',
            width: '283px',
            height: '61px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '50px',
            lineHeight: '100%',
            letterSpacing: '-6%',
            color: '#5C4737',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Who it's For ?
          </h2>
        
        {/* Description: Mind A Lot is for everyone... */}
        <p
          style={{
            position: 'absolute',
            top: '1993px',
            left: '496px',
            width: '408px',
            height: '70px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '35px',
            letterSpacing: '-3%',
            textAlign: 'center',
            color: '#0D0D0D',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
            Mind A Lot is for everyone who wants to feel better, grow stronger, and cope smarter.
          </p>
        
        {/* Rectangle */}
        <div
          style={{
            position: 'absolute',
            top: '2083px',
            left: '496px',
            width: '410px',
            height: '113px',
            backgroundColor: '#BE9B8433',
            borderRadius: '10px',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Text inside rectangle: Wherever you are. Whoever you are. However you feel. */}
        <p
          style={{
            position: 'absolute',
            top: '2095px',
            left: '511px',
            width: '327px',
            height: '60px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '30px',
            letterSpacing: '0%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          Wherever you are. Whoever you are. However you feel.
        </p>
        
        {/* - Mind A Lot is here for you! */}
        <p
          style={{
            position: 'absolute',
            top: '2165px',
            left: '676px',
            width: '214px',
            height: '19px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#755840',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          - Mind A Lot is here for you!
        </p>
        
        {/* Ellipse */}
        <div
          style={{
            position: 'absolute',
            top: '2083px',
            left: '856px',
            width: '50px',
            height: '49.89px',
            borderRadius: '50%',
            border: '2px solid #755840',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Arrow 1 */}
        <div
          style={{
            position: 'absolute',
            top: '2100px',
            left: '873px',
            width: '23.999999589257495px',
            height: '0px',
            borderTop: '2px solid #755840',
            opacity: 1,
            transform: 'rotate(-135deg)',
            transformOrigin: 'center',
          }}
        />
        
        {/* Frame 1 */}
        <div
          style={{
            position: 'absolute',
            top: '1912px',
            left: '66px',
            width: '410px',
            height: '594px',
            borderRadius: '10px',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
          }}
        >
          {/* Frame 1 Image */}
          <div
            style={{
              position: 'absolute',
              top: '-123px',
              left: '-42px',
              width: '494.9px',
              height: '717px',
              borderRadius: '10px',
              opacity: 1,
              transform: 'rotate(0deg)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/students-young-adults.jpg"
              alt="Students & Young Adults"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
              </div>
          
          {/* Students & Young Adults Title */}
          <p
            style={{
              position: 'absolute',
              top: '476px',
              left: '20px',
              width: '340px',
              height: '36px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 600,
              fontSize: '30px',
              lineHeight: '100%',
              letterSpacing: '-3%',
              color: '#FFFFFF',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            Students & Young Adults
          </p>
          
          {/* Frame 1 Description */}
          <p
            style={{
              position: 'absolute',
              top: '524px',
              left: '20px',
              width: '370px',
              height: '50px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '25px',
              letterSpacing: '-3%',
              color: '#FFFFFF',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
            }}
          >
            Facing exam stress, peer pressure, identity struggles, loneliness
          </p>
          </div>
        
        {/* Frame 2 */}
        <div
          style={{
            position: 'absolute',
            top: '1912px',
            left: '926px',
            width: '410px',
            height: '594px',
            borderRadius: '10px',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
          }}
        >
          {/* Frame 2 Image */}
          <div
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '410px',
              height: '594px',
              borderRadius: '10px',
              opacity: 1,
              transform: 'rotate(0deg)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/lgbtq-community.jpg"
              alt="LGBTQ+ Community"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
        </div>
          
          {/* LGBTQ+ Community Title */}
          <p
            style={{
              position: 'absolute',
              top: '501px',
              left: '20px',
              width: '283px',
              height: '36px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 600,
              fontSize: '30px',
              lineHeight: '100%',
              letterSpacing: '-3%',
              color: '#FFFFFF',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            LGBTQ+ Community
          </p>
          
          {/* Frame 2 Description */}
          <p
            style={{
              position: 'absolute',
              top: '549px',
              left: '20px',
              width: '370px',
              height: '25px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '25px',
              letterSpacing: '-3%',
              color: '#FFFFFF',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
            }}
          >
            Safe, affirming space to talk about anything
          </p>
        </div>
        
        {/* Frame 3 */}
        <div
          style={{
            position: 'absolute',
            top: '2527px',
            left: '66px',
            width: '410px',
            height: '416px',
            borderRadius: '10px',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
          }}
        >
          {/* Frame 3 Image */}
          <div
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '410px',
              height: '416px',
              borderRadius: '10px',
              opacity: 1,
              transform: 'rotate(0deg)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/older-adults.jpg"
              alt="Older Adults"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
        </div>
          
          {/* Older Adults Title */}
          <p
            style={{
              position: 'absolute',
              top: '311px',
              left: '20px',
              width: '307px',
              height: '36px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 600,
              fontSize: '30px',
              lineHeight: '100%',
              letterSpacing: '-3%',
              color: '#FFFFFF',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            Older Adults
          </p>
          
          {/* Frame 3 Description */}
          <p
            style={{
              position: 'absolute',
              top: '359px',
              left: '20px',
              width: '369px',
              height: '50px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '25px',
              letterSpacing: '-3%',
              color: '#FFFFFF',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
            }}
          >
            Loss, loneliness, transitions, or simply needing someone to talk
          </p>
          </div>
        
        {/* Frame 4 */}
        <div
          style={{
            position: 'absolute',
            top: '2527px',
            left: '926px',
            width: '410px',
            height: '416px',
            borderRadius: '10px',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
          }}
        >
          {/* Frame 4 Image */}
          <div
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '410px',
              height: '416px',
              borderRadius: '10px',
              opacity: 1,
              transform: 'rotate(0deg)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/anyone-needing-support.jpg"
              alt="Anyone Needing Support"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
        </div>
          
          {/* Anyone Needing Support Title */}
          <p
            style={{
              position: 'absolute',
              top: '311px',
              left: '20px',
              width: '307px',
              height: '36px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 600,
              fontSize: '30px',
              lineHeight: '100%',
              letterSpacing: '-3%',
              color: '#FFFFFF',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            Anyone Needing Support
          </p>
          
          {/* Frame 4 Description */}
          <p
            style={{
              position: 'absolute',
              top: '359px',
              left: '20px',
              width: '369px',
              height: '50px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '25px',
              letterSpacing: '-3%',
              color: '#FFFFFF',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
            }}
          >
            When friends or family aren't enough, or too much stress suffers you
          </p>
        </div>
        
        {/* Frame 5 */}
        <div
          style={{
            position: 'absolute',
            top: '2216px',
            left: '496px',
            width: '410px',
            height: '404px',
            borderRadius: '10px',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
          }}
        >
          {/* Frame 5 Image */}
          <div
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '410px',
              height: '404px',
              borderRadius: '10px',
              opacity: 1,
              transform: 'rotate(0deg)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/working-professionals.jpg"
              alt="Working Professionals"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          
          {/* Working Professionals Title */}
          <p
            style={{
              position: 'absolute',
              top: '311px',
              left: '20px',
              width: '307px',
              height: '36px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 600,
              fontSize: '30px',
              lineHeight: '100%',
              letterSpacing: '-3%',
              color: '#FFFFFF',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            Working Professionals
          </p>
          
          {/* Frame 5 Description */}
          <p
            style={{
              position: 'absolute',
              top: '359px',
              left: '10px',
              width: '369px',
              height: '25px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '25px',
              letterSpacing: '-3%',
              color: '#FFFFFF',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            Burnout, overthinking, career decisions, relationship stress
          </p>
          </div>
        
        {/* Frame 6 */}
        <div
          style={{
            position: 'absolute',
            top: '2640px',
            left: '496px',
            width: '410px',
            height: '303px',
            borderRadius: '10px',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
          }}
        >
          {/* Frame 6 Image */}
          <div
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '410px',
              height: '303px',
              borderRadius: '10px',
              opacity: 1,
              transform: 'rotate(0deg)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/neurodivergent-users.jpg"
              alt="Neurodivergent Users"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
        </div>
          
          {/* Neurodivergent Users Title */}
          <p
            style={{
              position: 'absolute',
              top: '200px',
              left: '20px',
              width: '307px',
              height: '36px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 600,
              fontSize: '30px',
              lineHeight: '100%',
              letterSpacing: '-3%',
              color: '#FFFFFF',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            Neurodivergent Users
          </p>
          
          {/* Frame 6 Description */}
          <p
            style={{
              position: 'absolute',
              top: '248px',
              left: '20px',
              width: '369px',
              height: '50px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '25px',
              letterSpacing: '-3%',
              color: '#FFFFFF',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
            }}
          >
            ADHD, emotional regulation, social fatigue, planning struggles
          </p>
        </div>
        
        {/* Key Features Heading */}
        <p
          id="features"
          style={{
            position: 'absolute',
            top: '3078px',
            left: '86px',
            width: '407px',
            height: '61px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '50px',
            lineHeight: '100%',
            letterSpacing: '-6%',
            color: '#5C4737',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            scrollMarginTop: '100px',
          }}
        >
          Key features
        </p>
        
        {/* Key Features Description */}
        <p
          style={{
            position: 'absolute',
            top: '3159px',
            left: '86px',
            width: '556px',
            height: '35px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '35px',
            letterSpacing: '-3%',
            color: '#0D0D0D',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Discover the essential features you need - all in one trusted platform.
        </p>
        
        {/* 24/7 Icon */}
        <div
          style={{
            position: 'absolute',
            top: '3241px',
            left: '86px',
            width: '50px',
            height: '50px',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/icons/Frame.svg"
            alt="24/7 Icon"
            width={50}
            height={50}
            style={{
              filter: 'brightness(0) saturate(100%) invert(68%) sepia(10%) saturate(600%) hue-rotate(15deg) brightness(110%) contrast(90%)',
            }}
          />
        </div>
        
        {/* Feature 1 Title */}
        <p
          style={{
            position: 'absolute',
            top: '3249px',
            left: '166px',
            width: '442px',
            height: '35px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '35px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          24/7 Live Chat With Human Counsellors
        </p>
        
        {/* Line below 24/7 */}
        <div
          style={{
            position: 'absolute',
            top: '3321px',
            left: '86px',
            width: '605px',
            height: '0px',
            borderTop: '1px solid #969694',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Feature 2 Icon */}
        <div
          style={{
            position: 'absolute',
            top: '3241px',
            left: '701px',
            width: '50px',
            height: '50px',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/icons/video-circle.svg"
            alt="Video Icon"
            width={50}
            height={50}
            style={{
              filter: 'brightness(0) saturate(100%) invert(68%) sepia(10%) saturate(600%) hue-rotate(15deg) brightness(110%) contrast(90%)',
            }}
          />
        </div>
        
        {/* Feature 2 Title */}
        <p
          style={{
            position: 'absolute',
            top: '3249px',
            left: '791px',
            width: '491px',
            height: '35px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '35px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Expert Videos, Podcasts, and Content Drops
        </p>
        
        {/* Line below Feature 2 */}
        <div
          style={{
            position: 'absolute',
            top: '3321px',
            left: '701px',
            width: '605px',
            height: '0px',
            borderTop: '1px solid #969694',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Feature 3 Icon */}
        <div
          style={{
            position: 'absolute',
            top: '3351px',
            left: '86px',
            width: '50px',
            height: '50px',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/icons/diagram.svg"
            alt="Anonymity Icon"
            width={50}
            height={50}
            style={{
              filter: 'brightness(0) saturate(100%) invert(68%) sepia(10%) saturate(600%) hue-rotate(15deg) brightness(110%) contrast(90%)',
            }}
          />
        </div>
        
        {/* Feature 3 Title */}
        <p
          style={{
            position: 'absolute',
            top: '3359px',
            left: '166px',
            width: '326px',
            height: '35px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '35px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          100% Anonymity Guaranteed
        </p>
        
        {/* Line below Feature 3 */}
        <div
          style={{
            position: 'absolute',
            top: '3431px',
            left: '86px',
            width: '605px',
            height: '0px',
            borderTop: '1px solid #969694',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Feature 4 Icon */}
        <div
          style={{
            position: 'absolute',
            top: '3351px',
            left: '701px',
            width: '50px',
            height: '50px',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/icons/briefcase.svg"
            alt="Location Icon"
            width={50}
            height={50}
            style={{
              filter: 'brightness(0) saturate(100%) invert(68%) sepia(10%) saturate(600%) hue-rotate(15deg) brightness(110%) contrast(90%)',
            }}
          />
        </div>
        
        {/* Feature 4 Title */}
        <p
          style={{
            position: 'absolute',
            top: '3359px',
            left: '791px',
            width: '418px',
            height: '35px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '35px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Works Across Countries & Languages
        </p>
        
        {/* Line below Feature 4 */}
        <div
          style={{
            position: 'absolute',
            top: '3431px',
            left: '701px',
            width: '605px',
            height: '0px',
            borderTop: '1px solid #969694',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Feature 5 Icon */}
        <div
          style={{
            position: 'absolute',
            top: '3461px',
            left: '86px',
            width: '50px',
            height: '50px',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/icons/search-normal.svg"
            alt="Mood Icon"
            width={50}
            height={50}
            style={{
              filter: 'brightness(0) saturate(100%) invert(68%) sepia(10%) saturate(600%) hue-rotate(15deg) brightness(110%) contrast(90%)',
            }}
          />
        </div>
        
        {/* Feature 5 Title */}
        <p
          style={{
            position: 'absolute',
            top: '3469px',
            left: '166px',
            width: '253px',
            height: '35px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '35px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Mood-Based Guidance
        </p>
        
        {/* Line below Feature 5 */}
        <div
          style={{
            position: 'absolute',
            top: '3541px',
            left: '86px',
            width: '605px',
            height: '0px',
            borderTop: '1px solid #969694',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Feature 6 Icon */}
        <div
          style={{
            position: 'absolute',
            top: '3461px',
            left: '701px',
            width: '50px',
            height: '50px',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/icons/ai-hospital.svg"
            alt="Hospital Icon"
            width={50}
            height={50}
            style={{
              filter: 'brightness(0) saturate(100%) invert(68%) sepia(10%) saturate(600%) hue-rotate(15deg) brightness(110%) contrast(90%)',
            }}
          />
        </div>
        
        {/* Feature 6 Title */}
        <p
          style={{
            position: 'absolute',
            top: '3469px',
            left: '791px',
            width: '565px',
            height: '35px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '35px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Escalation To Partner Hospitals For Psychiatric Care
        </p>
        
        {/* Line below Feature 6 */}
        <div
          style={{
            position: 'absolute',
            top: '3541px',
            left: '701px',
            width: '605px',
            height: '0px',
            borderTop: '1px solid #969694',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Feature 7 Icon */}
        <div
          style={{
            position: 'absolute',
            top: '3571px',
            left: '86px',
            width: '50px',
            height: '50px',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/icons/task.svg"
            alt="Assessment Icon"
            width={50}
            height={50}
            style={{
              filter: 'brightness(0) saturate(100%) invert(68%) sepia(10%) saturate(600%) hue-rotate(15deg) brightness(110%) contrast(90%)',
            }}
          />
        </div>
        
        {/* Feature 7 Title */}
        <p
          style={{
            position: 'absolute',
            top: '3579px',
            left: '166px',
            width: '322px',
            height: '35px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '35px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Bite-Sized Self Assessments
        </p>
        
        {/* Line below Feature 7 */}
        <div
          style={{
            position: 'absolute',
            top: '3651px',
            left: '86px',
            width: '605px',
            height: '0px',
            borderTop: '1px solid #969694',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Feature 8 Icon */}
        <div
          style={{
            position: 'absolute',
            top: '3571px',
            left: '701px',
            width: '50px',
            height: '50px',
            opacity: 1,
            transform: 'rotate(0deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/icons/diagram.svg"
            alt="Goal Tracker Icon"
            width={50}
            height={50}
            style={{
              filter: 'brightness(0) saturate(100%) invert(68%) sepia(10%) saturate(600%) hue-rotate(15deg) brightness(110%) contrast(90%)',
            }}
          />
        </div>
        
        {/* Feature 8 Title */}
        <p
          style={{
            position: 'absolute',
            top: '3579px',
            left: '791px',
            width: '427px',
            height: '35px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '35px',
            letterSpacing: '-3%',
            color: '#6D6D6F',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Goal Tracker With Behavioural Nudges
        </p>
        
        {/* Line below Feature 8 */}
        <div
          style={{
            position: 'absolute',
            top: '3651px',
            left: '701px',
            width: '605px',
            height: '0px',
            borderTop: '1px solid #969694',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
        
        {/* Testimonials Container */}
        <div
          style={{
            position: 'absolute',
            top: '3716px',
            left: '56px',
            width: '1323px',
            height: '616px',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        >
          {/* Testimonials Heading */}
          <p
            style={{
              position: 'absolute',
              top: '25px',
              left: '30px',
              width: '274px',
              height: '61px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 600,
              fontSize: '50px',
              lineHeight: '100%',
              letterSpacing: '-6%',
              color: '#5C4737',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
            }}
          >
            Testimonials
          </p>
          
          {/* Quote Text */}
          <p
            style={{
              position: 'absolute',
              top: '305px',
              left: '365px',
              width: '458px',
              height: '70px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '35px',
              letterSpacing: '-3%',
              color: '#0D0D0D',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
            }}
          >
            No one asked me for my name, and yet I've never felt more seen.
          </p>
          
          {/* Attribution */}
          <p
            style={{
              position: 'absolute',
              top: '415px',
              left: '601px',
              width: '222px',
              height: '35px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '35px',
              letterSpacing: '-3%',
              color: '#6D6D6F',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            — Student, Chennai
          </p>
          
          {/* Ellipse 47 - Half ellipse visible on right, melting to left */}
          <div
            style={{
              position: 'absolute',
              top: '115px',
              left: '30px',
              width: '225.00001525878906px',
              height: '450px',
              opacity: 1,
              transform: 'rotate(0deg)',
              padding: '2px',
              background: 'linear-gradient(180.18deg, rgba(177, 177, 177, 0) -3.49%, #000000 47.99%, rgba(177, 177, 177, 0) 102.52%)',
              borderRadius: '50%',
              clipPath: 'inset(0 0 0 50%)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#D9D9D9',
                borderRadius: '50%',
              }}
            />
          </div>
          
          {/* Avatar 1 */}
          <div
            style={{
              position: 'absolute',
              top: '129px',
              left: '130px',
              width: '50px',
              height: '50px',
              borderRadius: '25px',
              opacity: 1,
              transform: 'rotate(0deg)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/avatars/avatar-1.png"
              alt="Avatar 1"
              width={50}
              height={50}
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          
          {/* Avatar 2 */}
          <div
            style={{
              position: 'absolute',
              top: '300px',
              left: '215px',
              width: '80px',
              height: '80px',
              borderRadius: '40px',
              opacity: 1,
              transform: 'rotate(0deg)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/avatars/avatar-2.png"
              alt="Avatar 2"
              width={80}
              height={80}
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          
          {/* Avatar 3 */}
          <div
            style={{
              position: 'absolute',
              top: '501px',
              left: '130px',
              width: '50px',
              height: '50px',
              borderRadius: '25px',
              opacity: 1,
              transform: 'rotate(-180deg)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/avatars/avatar-3.png"
              alt="Avatar 3"
              width={50}
              height={50}
              style={{
                objectFit: 'cover',
                transform: 'rotate(180deg)',
              }}
            />
          </div>
          
          {/* Ellipse 51 */}
          <div
            style={{
              position: 'absolute',
              top: '290px',
              left: '205px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              border: '1px solid #00000080',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          />
          
          {/* Ellipse 52 */}
          <div
            style={{
              position: 'absolute',
              top: '275px',
              left: '190px',
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              border: '1px solid #00000040',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          />
          
          {/* Ellipse 53 */}
          <div
            style={{
              position: 'absolute',
              top: '260px',
              left: '175px',
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              border: '1px solid #0000000D',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          />
          
          {/* Sunset Image */}
          <div
            style={{
              position: 'absolute',
              top: '65px',
              left: '867px',
              width: '433px',
              height: '520px',
              borderRadius: '20px',
              opacity: 1,
              transform: 'rotate(0deg)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/sunset.jpg"
              alt="Sunset"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        
        {/* Trusted by 50+ Clients Heading */}
        <p
          style={{
            position: 'absolute',
            top: '4359px',
            left: '66px',
            width: '399px',
            height: '158px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '65px',
            lineHeight: '100%',
            letterSpacing: '-6%',
            color: '#5C4737',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          Trusted by 50+ Clients
        </p>
        
        {/* Trusted by Description */}
        <p
          style={{
            position: 'absolute',
            top: '4517px',
            left: '66px',
            width: '406px',
            height: '70px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '35px',
            letterSpacing: '-3%',
            color: '#0D0D0D',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
          }}
        >
          Trusted by leading corporates and educational institutions that care for mental well-being.
        </p>
        
        {/* Ellipse 17 */}
        <div
          style={{
            position: 'absolute',
            top: '4459px',
            left: '517px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
          }}
        >
          <Image
            src="/logos/hymamshu-jyothi-logo.jpg"
            alt="Logo 1"
            width={100}
            height={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        
        {/* Ellipse 2 */}
        <div
          style={{
            position: 'absolute',
            top: '4459px',
            left: '677px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
          }}
        >
          <Image
            src="/logos/mount-litera-logo.jpg"
            alt="Logo 2"
            width={100}
            height={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        
        {/* Ellipse 3 */}
        <div
          style={{
            position: 'absolute',
            top: '4459px',
            left: '837px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
          }}
        >
          <Image
            src="/logos/renuka-education-logo.png"
            alt="Logo 3"
            width={100}
            height={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        
        {/* Ellipse 4 */}
        <div
          style={{
            position: 'absolute',
            top: '4459px',
            left: '997px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
          }}
        >
          <Image
            src="/logos/sharadh-vidhyalaya-logo.jpg"
            alt="Logo 4"
            width={100}
            height={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        
        {/* Ellipse 5 */}
        <div
          style={{
            position: 'absolute',
            top: '4459px',
            left: '1157px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
          }}
        >
          <Image
            src="/logos/timpany-school-logo.jpg"
            alt="Logo 5"
            width={100}
            height={100}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        
        {/* Ellipse 6 */}
        <div
          style={{
            position: 'absolute',
            top: '4459px',
            left: '1317px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
          }}
        >
          {/* Placeholder for 6th logo - can be added when available */}
        </div>
        
        {/* Rectangle with Rocks Image */}
        <div
          style={{
            position: 'absolute',
            top: '4757px',
            left: '95px',
            width: '1250px',
            height: '360px',
            borderRadius: '30px',
            border: '10px solid #FFFFFF',
            backgroundColor: '#BFBFBD',
            opacity: 1,
            transform: 'rotate(0deg)',
            overflow: 'hidden',
            zIndex: 10,
          }}
        >
          <Image
            src="/images/rocks.jpg"
            alt="Rocks"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
              borderRadius: '20px',
            }}
          />
        </div>
        
        {/* CTA Heading */}
        <p
          style={{
            position: 'absolute',
            top: '4847px',
            left: '289px',
            width: '863px',
            height: '70px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 600,
            fontSize: '50px',
            lineHeight: '70px',
            letterSpacing: '-6%',
            textAlign: 'center',
            color: '#5C4737',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            whiteSpace: 'nowrap',
            zIndex: 11,
          }}
        >
          Take the first step toward feeling better.
        </p>
        
        {/* CTA Description */}
        <p
          style={{
            position: 'absolute',
            top: '4927px',
            left: '378px',
            width: '684px',
            height: '35px',
            fontFamily: 'var(--font-inter-sans)',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '35px',
            letterSpacing: '-3%',
            textAlign: 'center',
            color: '#FFFFFF',
            opacity: 1,
            transform: 'rotate(0deg)',
            margin: 0,
            padding: '10px 20px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            zIndex: 11,
          }}
        >
          Start talking. Stay anonymous. Feel lighter. Because your mind matters a lot.
        </p>
        
        {/* Rectangle 1 - Download App */}
        <div
          style={{
            position: 'absolute',
            top: '5012px',
            left: '382px',
            width: '212px',
            height: '60px',
            borderRadius: '30px',
            backgroundColor: '#967B6A',
            opacity: 1,
            transform: 'rotate(0deg)',
            zIndex: 11,
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '21px',
              left: '24px',
              width: '107px',
              height: '19px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
              Download App
          </span>
          
          {/* Circle */}
          <div
            style={{
              position: 'absolute',
              top: '5px',
              left: '157px',
              width: '50px',
              height: '50px',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Arrow */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{
                transform: 'rotate(-45deg)',
              }}
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#967B6A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        {/* Rectangle 2 */}
        <div
          style={{
            position: 'absolute',
            top: '5012px',
            left: '614px',
            width: '212px',
            height: '60px',
            borderRadius: '30px',
            backgroundColor: '#967B6A',
            opacity: 1,
            transform: 'rotate(0deg)',
            zIndex: 11,
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '20px',
              left: '24px',
              width: '115px',
              height: '19px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            Partner With Us
          </span>
          
          {/* Circle */}
          <div
            style={{
              position: 'absolute',
              top: '5px',
              left: '157px',
              width: '50px',
              height: '50px',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Arrow */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{
                transform: 'rotate(-45deg)',
              }}
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#967B6A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        {/* Rectangle 3 */}
        <div
          style={{
            position: 'absolute',
            top: '5012px',
            left: '846px',
            width: '212px',
            height: '60px',
            borderRadius: '30px',
            backgroundColor: '#967B6A',
            opacity: 1,
            transform: 'rotate(0deg)',
            zIndex: 11,
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '21px',
              left: '24px',
              width: '126px',
              height: '19px',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            Talk To Our Team
          </span>
          
          {/* Circle */}
          <div
            style={{
              position: 'absolute',
              top: '5px',
              left: '157px',
              width: '50px',
              height: '50px',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Arrow */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{
                transform: 'rotate(-45deg)',
              }}
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#967B6A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        {/* Footer Rectangle */}
        <div
          style={{
            position: 'absolute',
            top: '5025px',
            left: '0px',
            width: '100%',
            height: '542px',
            backgroundColor: '#E4D6CD',
            border: '1px solid #BFBFBD',
            opacity: 1,
            transform: 'rotate(0deg)',
            zIndex: 1,
          }}
        >
          <br></br>
          <br></br>
        <Footer/>
        </div>
      </div>
    </main>
  );
}
