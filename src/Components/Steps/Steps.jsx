import React, { useEffect, useRef } from 'react';
import './Steps.scss';

const Steps = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (iframeRef.current) {
                    const iframe = iframeRef.current;
                    const autoplayUrl = "https://www.youtube.com/embed/BBJa32lCaaY?autoplay=1&mute=1&si=D6o0BmYxTPVhlIwa";
                    const pauseUrl = "https://www.youtube.com/embed/BBJa32lCaaY?autoplay=0&mute=1&si=D6o0BmYxTPVhlIwa";

                    // If the video is in the viewport, play it; otherwise, stop it
                    iframe.src = entry.isIntersecting ? autoplayUrl : pauseUrl;
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null, // Use the viewport as the root
            threshold: 0.5, // Trigger when 50% of the video is visible
        });

        if (iframeRef.current) {
            observer.observe(iframeRef.current);
        }

        return () => {
            if (iframeRef.current) {
                observer.unobserve(iframeRef.current);
            }
        };
    }, []);

    return (
        <section id="timeline">
            <h1>How Finace Works</h1>
            <p className="leader">
                With Finace, managing your finances has never been easier. Our platform works seamlessly in four simple steps:
            </p>
            <div className="demo-card-wrapper">
                <div className="demo-card demo-card--step1">
                    <div className="head">
                        <div className="number-box">
                            <span>01</span>
                        </div>
                        <h2>Employee requests earned pay on Finace.</h2>
                    </div>
                </div>

                <div className="demo-card demo-card--step2">
                    <div className="head">
                        <div className="number-box">
                            <span>02</span>
                        </div>
                        <h2>Finace credits the earned salary instantly to the employee's account.</h2>
                    </div>
                </div>

                <div className="demo-card demo-card--step3">
                    <div className="head">
                        <div className="number-box">
                            <span>03</span>
                        </div>
                        <h2>Finace reconciles the earned salary with your company's payroll.</h2>
                    </div>
                </div>

                <div className="demo-card demo-card--step4">
                    <div className="head">
                        <div className="number-box">
                            <span>04</span>
                        </div>
                        <h2>
                            Employers gain real-time insights into the financial analytics of the workforce, including earned wage
                            access and employee turnover rates.
                        </h2>
                    </div>
                </div>
            </div>
            {/* <iframe
                ref={iframeRef}
                width="760"
                height="415"
                src="https://www.youtube.com/embed/BBJa32lCaaY?si=D6o0BmYxTPVhlIwa"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe> */}
        </section>
    )
}

export default Steps