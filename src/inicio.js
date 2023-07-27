gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 2.5,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
   
      opacity: 0,
    },
    {

      opacity: 1,
      duration: 2,
      delay: 1,
    }
  );