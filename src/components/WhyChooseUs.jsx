import { useRef, useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './WhyChooseUs.css';

const features = [
  {
    id: 'feature-speed',
    title: 'Lightning Speed',
    description: 'We deliver projects 2x faster without compromising quality.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'feature-scale',
    title: 'Infinite Scalability',
    description: 'Architecture built to handle millions of users from day one.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'feature-tech',
    title: 'Modern Tech Stack',
    description: 'React, Node.js, Python, AWS — always cutting-edge.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="16,18 22,12 16,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8,6 2,12 8,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="14" y1="4" x2="10" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'feature-client',
    title: 'Client-First Approach',
    description: 'Transparent communication, weekly demos, and your vision first.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const sectionRef = useScrollAnimation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0–100
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const formatTime = (secs) => {
    if (!isFinite(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60)
      .toString()
      .padStart(2, '0');
    return `${m}:${s}`;
  };

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleSkip = (seconds) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.min(Math.max(video.currentTime + seconds, 0), video.duration || 0);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setCurrentTime(video.currentTime);
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const newProgress = Number(e.target.value);
    video.currentTime = (newProgress / 100) * video.duration;
    setProgress(newProgress);
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Auto-play when scrolled into view, auto-pause when scrolled out
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Browser blocked autoplay with sound — retry muted
              video.muted = true;
              setIsMuted(true);
              video.play().catch(() => {});
            });
          }
        } else if (!video.paused) {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="section why-us" ref={sectionRef}>
      <div className="container why-us__layout">
        {/* Left column — features */}
        <div className="why-us__content reveal-left">
          <span className="section-label">Why NexAppra</span>
          <h2 className="section-title">
            Why Clients <span className="text-gradient">Choose Us</span>
          </h2>

          <ul className="why-us__features">
            {features.map((feat, i) => (
              <li
                key={feat.id}
                id={feat.id}
                className={`why-us__feature reveal delay-${i + 1}`}
              >
                <div className="why-us__feature-icon">{feat.icon}</div>
                <div className="why-us__feature-text">
                  <h3 className="why-us__feature-title">{feat.title}</h3>
                  <p className="why-us__feature-desc">{feat.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — video */}
        <div className="why-us__visual reveal-right">
          <div className="why-us__orb"></div>
          <div className={`why-us__video-frame ${isPlaying ? 'is-playing' : ''}`}>
            <video
              ref={videoRef}
              className="why-us__video"
              src="/videos/why-us.mp4"
              playsInline
              preload="metadata"
              muted={isMuted}
              onEnded={() => setIsPlaying(false)}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={(e) => setDuration(e.target.duration)}
              onClick={handlePlayClick}
            />

            {!isPlaying && (
              <button
                type="button"
                className="why-us__play-btn"
                onClick={handlePlayClick}
                aria-label="Play video"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}

            {/* Bottom controls bar: skip back, play/pause, seek bar, skip forward, time */}
            <div className="why-us__controls">
              <button
                type="button"
                className="why-us__ctrl-btn"
                onClick={() => handleSkip(-10)}
                aria-label="Rewind 10 seconds"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polygon points="11,19 2,12 11,5" fill="currentColor" stroke="none" />
                  <polygon points="21,19 12,12 21,5" fill="currentColor" stroke="none" />
                </svg>
              </button>

              <button
                type="button"
                className="why-us__ctrl-btn why-us__ctrl-btn--main"
                onClick={handlePlayClick}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="6" y="5" width="4" height="14" />
                    <rect x="14" y="5" width="4" height="14" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <button
                type="button"
                className="why-us__ctrl-btn"
                onClick={() => handleSkip(10)}
                aria-label="Forward 10 seconds"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polygon points="13,19 22,12 13,5" fill="currentColor" stroke="none" />
                  <polygon points="3,19 12,12 3,5" fill="currentColor" stroke="none" />
                </svg>
              </button>

              <input
                type="range"
                className="why-us__seek-bar"
                min="0"
                max="100"
                step="0.1"
                value={progress || 0}
                onChange={handleSeek}
                aria-label="Seek video"
              />

              <span className="why-us__time">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <button
                type="button"
                className="why-us__ctrl-btn"
                onClick={handleMuteToggle}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" fill="currentColor" stroke="none" />
                    <line x1="23" y1="9" x2="17" y2="15" strokeLinecap="round" />
                    <line x1="17" y1="9" x2="23" y2="15" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" fill="currentColor" stroke="none" />
                    <path d="M15.5 8.5a5 5 0 010 7" strokeLinecap="round" />
                    <path d="M18.5 5.5a9 9 0 010 13" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
