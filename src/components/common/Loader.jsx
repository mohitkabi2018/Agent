import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';

const Loader = ({ onLoadingComplete }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    // Split text
    const loadingText = new SplitType(".loading-text.initial", { types: "chars" });
    const completeText = new SplitType(".loading-text.complete", { types: "chars" });

    // Initial states
    gsap.set(".loading-text.complete", { y: "100%" });
    gsap.set(loadingText.chars, { opacity: 0, y: 100 });
    gsap.set(completeText.chars, { opacity: 0, y: 100 });

    // Animate in loading text
    gsap.to(loadingText.chars, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out"
    });

    // Enhanced color stages with coffee-themed gradients
    const colorStages = [
      { 
        bg: "linear-gradient(to right bottom, #1A1A1A, #2C2C2C)", 
        text: "#E8C9A3",
        progress: "#E8C9A3"
      },
      { 
        // At 50% - Warm coffee tone
        bg: "linear-gradient(to right bottom, #2C2C2C, #3C2A21)", 
        text: "#E8C9A3",
        progress: "#E8DFD8"
      },
      { 
        // At 80% - Rich espresso tone
        bg: "linear-gradient(to right bottom, #3C2A21, #2C2C2C)", 
        text: "#E8DFD8",
        progress: "#E8C9A3"
      },
      { 
        // Final stage - Return to theme
        bg: "linear-gradient(to right bottom, #2C2C2C, #1A1A1A)", 
        text: "#E8C9A3",
        progress: "#E8C9A3"
      }
    ];

    function updateColors(progress) {
      let stage;
      if (progress < 50) {
        stage = 0;
      } else if (progress < 80) {
        stage = 1;
      } else if (progress < 95) {
        stage = 2;
      } else {
        stage = 3;
      }

      const colors = colorStages[stage];
      loaderRef.current.style.background = colors.bg;
      document.querySelector(".progress-bar").style.backgroundColor = colors.progress;
      
      // Enhanced text effects
      document.querySelectorAll(".loading-text .char, .percentage").forEach((el) => {
        el.style.color = colors.text;
        if (progress > 80) {
          // Enhanced glow effect for final stages
          el.style.textShadow = `0 0 15px ${colors.text}60, 0 0 30px ${colors.text}40`;
          el.style.transition = "all 0.3s ease";
        } else if (progress > 50) {
          // Subtle glow for middle stage
          el.style.textShadow = `0 0 10px ${colors.text}40`;
          el.style.transition = "all 0.3s ease";
        }
      });

      // Enhanced scale effect on percentage at milestones
      if (progress === 50 || progress === 80 || progress === 100) {
        gsap.to(".percentage", {
          scale: 1.2,
          duration: 0.4,
          yoyo: true,
          repeat: 1,
          ease: "elastic.out(1, 0.3)"
        });
      }
    }

    const tl = gsap.timeline({
      onComplete: () => onLoadingComplete?.()
    });

    tl.to(".progress-bar", {
      width: "100%",
      duration: 3,
      ease: "power1.inOut",
      onUpdate: function () {
        const progress = Math.round(this.progress() * 100);
        document.querySelector(".percentage").textContent = progress;
        updateColors(progress);
      }
    })
    .to(".loading-text.initial", {
      y: "-100%",
      duration: 0.5,
      ease: "power2.inOut"
    })
    .to(".loading-text.complete", {
      y: "0%",
      duration: 0.5,
      ease: "power2.inOut"
    }, "<")
    .to(completeText.chars, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.03,
      ease: "power2.out"
    }, "<0.2")
    .to(loaderRef.current, {
      y: "-100vh",
      duration: 1,
      ease: "power2.inOut",
      delay: 0.5
    });

    return () => {
      tl.kill();
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4">
        <div className="relative flex flex-col items-center w-full">
          {/* Progress Bar with enhanced styling */}
          <div className="w-[85vw] xs:w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[300px] 
                        h-[2px] xs:h-[3px] bg-[#E8C9A3]/10 
                        mb-3 xs:mb-4 sm:mb-5 
                        relative overflow-hidden rounded-full"
          >
            <div className="progress-bar absolute left-0 top-0 h-full w-0 
                          bg-[#E8C9A3] rounded-full 
                          shadow-[0_0_10px_rgba(232,201,163,0.3)]" 
            />
          </div>

          {/* Text Container with enhanced font */}
          <div className="h-[2em] xs:h-[2.5em] sm:h-[3em] 
                        relative overflow-hidden 
                        w-[140px] xs:w-[160px] sm:w-[180px] md:w-[200px] 
                        mb-3 xs:mb-4 sm:mb-5"
          >
            <div className="loading-text initial absolute w-full 
                          text-center text-[#E8C9A3] 
                          text-xs xs:text-sm sm:text-base 
                          uppercase tracking-wider font-medium"
            >
              Loading
            </div>
            <div className="loading-text complete absolute w-full 
                          text-center text-[#E8C9A3] 
                          text-xs xs:text-sm sm:text-base 
                          uppercase tracking-wider font-medium"
            >
              Complete
            </div>
          </div>

          {/* Enhanced Percentage Display - Better mobile responsiveness */}
          <div className="percentage fixed 
                        bottom-6 xs:bottom-8 sm:bottom-10 md:bottom-12
                        right-4 xs:right-6 sm:right-8 md:right-10
                        text-[12vh] xs:text-[15vh] sm:text-[20vh] md:text-[25vh] lg:text-[30vh]
                        leading-[0.8] text-[#E8C9A3] opacity-10 
                        font-bold transition-all duration-300
                        transform-gpu select-none"
          >
            0
          </div>

          {/* Background Decorative Elements - Adjusted for mobile */}
          <div className="absolute inset-0 pointer-events-none opacity-50 xs:opacity-100">
            <div className="absolute top-1/4 -left-[5%] xs:-left-[10%] 
                          w-[20%] xs:w-[30%] aspect-square 
                          bg-[#E8C9A3]/5 rounded-full 
                          blur-[50px] xs:blur-[100px]" 
            />
            <div className="absolute bottom-1/4 -right-[5%] xs:-right-[10%] 
                          w-[20%] xs:w-[30%] aspect-square 
                          bg-[#E8C9A3]/5 rounded-full 
                          blur-[50px] xs:blur-[100px]" 
            />
          </div>
        </div>


      </div>
    </motion.div>
  );
};

export default Loader; 