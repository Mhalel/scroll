        gsap.registerPlugin(ScrollTrigger);


        gsap.fromTo( ".con", {
            backgroundColor: gsap.getProperty("html", "--blue")
        }, {
            scrollTrigger: {
                trigger: ".reveal-type",
                scrub: true,
                end: "bottom bottom",
            },
            backgroundColor: gsap.getProperty("html", "--orange")
        });

        const splitTypes = document.querySelectorAll('.reveal-type')
        const splitTypes1 = document.querySelectorAll('.reveal-type1')
        splitTypes1.forEach((char,i) => {
            const text = new SplitType(char, { types: 'chars'})
            gsap.from(text.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 70%',
                        end: 'top 0%',
                        scrub: true,
                        markers: false,
                        
                    },
                    scale:1.5,
                    rotation:20,
                    opacity:0,
                    stagger:0.2
            })
            });
        splitTypes.forEach((char,i) => {
            const text = new SplitType(char, { types: 'chars'})
            gsap.from(text.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: '5% 90%',
                        end: '5% 0%',
                        scrub: true,
                        markers: false,
                        
                    },
                    opacity:0.2,
                    stagger:0.1
            })
        })


        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
        console.log(e)
        })

        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
