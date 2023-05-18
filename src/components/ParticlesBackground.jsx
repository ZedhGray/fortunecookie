import React, { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'
import particlesConfid from '../utils/particles-config'

const ParticlesBackground = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine)
  }, [])

  return (
    <div>
      <Particles
        // id="tsparticles"
        options={particlesConfid}
        init={particlesInit}
      />
    </div>
  )
}
export default ParticlesBackground
