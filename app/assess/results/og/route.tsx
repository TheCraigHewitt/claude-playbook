import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const identity = searchParams.get('identity') || 'ai-first-founder'
  const score = searchParams.get('score') || '5'
  const path = searchParams.get('path') || 'ai-first-founder'

  const displayName = `The ${identity
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        {/* Top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #FF4D4D, #FF6B35, #FFB800)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '999px',
            border: '1px solid #3F3F46',
            background: '#141416',
            fontSize: '16px',
            color: '#A1A1AA',
            marginBottom: '32px',
          }}
        >
          The Claude Playbook
        </div>

        {/* Identity name */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '24px',
            textAlign: 'center',
          }}
        >
          {displayName}
        </div>

        {/* Score */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: '#A1A1AA',
            }}
          >
            Claude Maturity
          </div>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: '#FF4D4D',
            }}
          >
            {score}/10
          </div>
        </div>

        {/* Path */}
        <div
          style={{
            padding: '12px 24px',
            borderRadius: '12px',
            border: '1px solid #27272A',
            background: '#141416',
            fontSize: '18px',
            color: '#A1A1AA',
          }}
        >
          Implementation Path:{' '}
          <span style={{ color: '#FFFFFF', fontWeight: 600 }}>
            {path
              .split('-')
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(' ')}
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '18px',
            color: '#71717A',
          }}
        >
          craighewitt.com/claude-playbook
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
