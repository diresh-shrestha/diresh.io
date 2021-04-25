import { Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { animated as a, useSpring } from "react-spring"
import Particles from "react-tsparticles"
import styled from "styled-components"
import Button from "./Button"
import Container from "./Container"
import SocialLinks from "./icons/SocialLinks"

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: none;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  &:nth-child(2) {
    @media (max-width: 768px) {
      margin-left: 5rem;
    }
  }
`

const Wrapper = styled.div`
  height: 800px;
  width: 100%;

  @media (max-width: 768px) {
    height: 600px;
  }
`
const TextWrapper = styled(Container)`
  background: none;
  position: relative;
  padding: 0;
  text-align: left;
  margin: 0 2.5rem;
  margin-top: 8rem;
  margin-right: 5rem;
  h1 {
    margin: 0;
    font-size: 2.5rem;
    color: var(--textTitle);
  }
  @media (max-width: 1024px) {
    margin-right: 0rem;
  }
  @media (max-width: 768px) {
    margin-top: 4rem;
    margin-right: 1rem;
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 3rem;
    }
  }
`

const StyledImg = styled(Img)`
  border-radius: 3%;
  left: 0;
  width: 100%;
  z-index: -1;
  border: 20px;
  height: 700px;
  width: 600px;

  @media (max-width: 1024px) {
    width: 500px;
    height: 600px;
  }
  @media (max-width: 768px) {
    max-width: 700px;
    height: 600px;
  }
  @media (max-width: 425px) {
    display: none;
  }
`

const MobileImg = styled(Img)`
  border-radius: 3%;
  left: 0;
  width: 100%;
  z-index: -1;

  border: 20px;
  height: auto;
  width: 380px;
  @media (max-width: 375px) {
    width: 350px;
  }
  @media (max-width: 375px) {
    width: 350px;
  }
  @media (max-width: 320px) {
    width: 280px;
  }
  @media (min-width: 426px) {
    display: none;
  }
`

const ImgCaption = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin-top: 1rem;
  z-index: 1;
`

const ImageWrapper = styled.div`
  margin: 2rem auto;

  .card {
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;
    &:hover {
      box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    }
  }
`

const Links = styled.div`
  margin-top: 2rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  line-height: 2;
  z-index: 1;
`

const StyledParticles = styled(Particles)`
  display: flex;
  justify-content: center;
  margin-left: 4rem;
  @media (max-width: 950px) {
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    margin-left: 0rem;
  }
`

export default function Hero({ desktop, mobile }) {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 40,
    (x - window.innerWidth / 2) / 40,
    1,
  ]
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  return (
    <Wrapper>
      <ContainerWrapper>
        <TextWrapper>
          <h1>Hello!</h1>

          <p style={{ marginBottom: `0`, marginTop: `1rem` }}>My name is</p>

          <h1>Diresh Shrestha</h1>

          <div style={{ marginTop: `1rem` }}>
            <p>Software Developer</p>
          </div>
          <Links>
            <SocialLinks />
          </Links>
          <ButtonWrapper>
            <Link to="/contact">
              <Button text="CONTACT" />
            </Link>
            <a href={`Resume.pdf`} download>
              <Button text="RESUME" />
            </a>
          </ButtonWrapper>
        </TextWrapper>

        {/* <StyledParticles
          height={500}
          style={{ position: `relative`, marginTop: `5rem` }}
          id="tsparticles"
          width={400}
          options={{
            autoPlay: true,
            background: {
              color: {
                value: "",
              },
              image: "",
              position: "",
              repeat: "",
              size: "",
              opacity: 1,
            },
            backgroundMask: {
              composite: "destination-out",
              cover: {
                color: {
                  value: "#808080",
                },
                opacity: 1,
              },
              enable: false,
            },
            backgroundMode: {
              enable: false,
              zIndex: -1,
            },
            detectRetina: false,
            fpsLimit: 30,
            infection: {
              cure: false,
              delay: 0,
              enable: false,
              infections: 0,
              stages: [],
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onDiv: {
                  selectors: "#repulse-div",
                  enable: false,
                  mode: "repulse",
                  type: "circle",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                attract: {
                  distance: 200,
                  duration: 0.4,
                  speed: 1,
                },
                bounce: {
                  distance: 200,
                },
                bubble: {
                  distance: 40,
                  duration: 2,
                  opacity: 8,
                  size: 6,
                  color: "#e43f5a",
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.5,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 400,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 1,
                  },
                },
                light: {
                  area: {
                    gradient: {
                      start: {
                        value: "#808080",
                      },
                      stop: {
                        value: "#808080",
                      },
                    },
                    radius: 1000,
                  },
                  shadow: {
                    color: {
                      value: "#808080",
                    },
                    length: 2000,
                  },
                },
                push: {
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                  speed: 1,
                },
                slow: {
                  factor: 1,
                  radius: 0,
                },
                trail: {
                  delay: 1,
                  quantity: 1,
                },
              },
            },
            manualParticles: [],
            motion: {
              disable: false,
              reduce: {
                factor: 4,
                value: false,
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              collisions: {
                bounce: {
                  horizontal: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                  vertical: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                },
                enable: false,
                mode: "bounce",
              },
              color: {
                value: "#808080",
                animation: {
                  enable: false,
                  speed: 1,
                  sync: true,
                },
              },
              life: {
                count: 0,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  sync: false,
                },
                duration: {
                  random: {
                    enable: false,
                    minimumValue: 0.0001,
                  },
                  value: 0,
                  sync: false,
                },
              },
              links: {
                blink: false,
                color: {
                  value: "#808080",
                },
                consent: false,
                distance: 35,
                enable: true,
                frequency: 1,
                opacity: 0.8,
                shadow: {
                  blur: 5,
                  color: {
                    value: "#00ff00",
                  },
                  enable: false,
                },
                triangles: {
                  enable: false,
                  frequency: 1,
                },
                width: 1,
                warp: false,
              },
              move: {
                angle: {
                  offset: 45,
                  value: 90,
                },
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                direction: "none",
                distance: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  maxSpeed: 50,
                },
                noise: {
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                  },
                  enable: false,
                },
                outModes: {
                  default: "bounce",
                  bottom: "bounce",
                  left: "bounce",
                  right: "bounce",
                  top: "bounce",
                },
                random: false,
                size: false,
                speed: 1,
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fillColor: {
                    value: "#000000",
                  },
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: false,
                  area: 2000,
                  factor: 1000,
                },
                limit: 0,
                value: 200,
              },
              opacity: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 0.4,
                animation: {
                  enable: true,
                  minimumValue: 0.05,
                  speed: 2,
                  sync: false,
                },
              },
              reduceDuplicates: false,
              rotate: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  sync: false,
                },
                direction: "clockwise",
                path: false,
              },
              shadow: {
                blur: 0,
                color: {
                  value: "#000000",
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                options: {
                  character: {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "*",
                    weight: "400",
                  },
                  char: {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "*",
                    weight: "400",
                  },
                  polygon: {
                    sides: 5,
                  },
                  star: {
                    sides: 5,
                  },
                },
                type: "circle",
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 1,
                },
                value: 1,
                animation: {
                  destroy: "none",
                  enable: false,
                  minimumValue: 0.1,
                  speed: 40,
                  startValue: "max",
                  sync: false,
                },
              },
              stroke: {
                width: 0,
                color: {
                  value: "#808080",
                  animation: {
                    enable: false,
                    speed: 1,
                    sync: true,
                  },
                },
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: false,
            themes: [],
            polygon: {
              draw: {
                enable: true,
                stroke: {
                  color: {
                    value: "#808080",
                  },
                  width: 0.8,
                  opacity: 0.4,
                },
              },
              enable: true,
              inline: {
                arrangement: "equidistant",
              },
              move: {
                radius: 10,
                type: "path",
              },
              scale: 0.6,
              type: "inline",
              url: "https://cdn.matteobruni.it/images/particles/smalldeer.svg",
            },
          }}
        /> */}
        <ImageWrapper>
          <a.div
            className="card"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
              transform: props.xys.interpolate(trans),
            }}
          >
            <StyledImg fluid={desktop} />
          </a.div>
          <MobileImg fluid={mobile} />

          <ImgCaption>
            Picture taken in{" "}
            <a
              className="hvr-underline-from-left"
              target="_blank"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Sibelius_Monument_(Helsinki)"
            >
              Sibelius Monument
            </a>{" "}
          </ImgCaption>
        </ImageWrapper>
      </ContainerWrapper>
    </Wrapper>
  )
}
