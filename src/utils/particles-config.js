const particlesConfid = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'image',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: '/backgrounds/cerezo.png',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 16.03412060865523,
      random: true,
      anim: {
        enable: true,
        speed: 4.872463273808071,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 100,
      color: '#ffffff',
      opacity: 0.04008530152163807,
      width: 2,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'bottom',
      random: false,
      straight: true,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
      onclick: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 20,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
}

export default particlesConfid
