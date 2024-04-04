import { useEffect } from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import ecosystem from "../assets/pages/ecosystem/ecosystem.png"
import integration from "../assets/pages/ecosystem/integrations.png"

// definisco la vista con un'arrow function
const Ecosystem = () => {
  useEffect(() => {
    const scrollTop = () => {
      window.scrollTo(0, 0)
    }
    scrollTop()
  }, [])

  // ritorno i contenuti
  return (
    <>
      <Navbar/>

      <main className="main-content">
        <header className="content-header">
          <h1>Ecosystem</h1>
          {
            ecosystem && (
              <figure>
                <img src={ecosystem} alt="" />
              </figure>
            )
          }          
        </header>

        <section className="content-section">
          <div className="section-body">
            <p>
              Stable Diffusion is an open-source solution designed for generating images from text inputs. This innovative tool extends its capabilities through the Stable Diffusion Web UI, offering access to many features via an API and interactive user interface. In today's era of Artificial Intelligence, managing the computational demands of AI models poses a significant challenge for businesses seeking to integrate them into software and applications. 
            </p>
          </div>
        </section>

        <section className="content-section">
          <header className="section-header">
            <h2>What are APIs?</h2>
          </header>
          <div className="section-body">
            <p>Application Programming Interfaces (APIs) offer a solution to this challenge. By abstracting away the complexities of maintenance, APIs allow businesses to concentrate on their core logic and user experience.</p>
            <p>APIs are standardized protocols dictating how one software application can interact with and utilize the functionalities or data of another application, service, or platform. Serving as intermediaries, APIs facilitate seamless integration between software components.</p>
            <p>In software development, APIs offer developers a mechanism to access functions, services, or data from various sources like cloud services, databases, or AI models. without necessitating an understanding of the underlying intricacies. This approach not only simplifies development processes but also encourages the creation of feature-rich applications.</p>
          </div>          
        </section>

        <section className="content-section">
          <header className="section-header">
            <h2>Stable Diffusion integration</h2>
            {
              integration && (
                <figure>
                  <img src={integration} alt="" />
                </figure>
              )
            }            
          </header>
          <div className="section-body">
            <p>Stable Diffusion offers a comprehensive integration experience through its well-structured API documentation, it provides developers with clear guidance on integration procedures, usage instructions, and practical examples. Additionally, the availability of SDKs for popular programming languages such as Python, JavaScript, and Java further enhances integration ease by offering pre-built functions and utilities tailored to these languages. With compatibility across a wide range of programming languages, Stable Diffusion ensures flexibility and accessibility for developers regardless of their language preferences. The integration of Stable Diffusion's API with popular software development frameworks facilitates the incorporation into existing projects without requiring significant modifications. The active developer community and responsive support channels provided by Stable Diffusion, including forums, documentation updates encourage collaboration and facilitate effective troubleshooting, making the integration process easier for developers. </p>
          </div>          
        </section>
        <section className="content-section">
          <header className="section-header">
            <h2>Integration Between Stable Diffusion and Unity or Unreal Engine</h2>
          </header>
          <div className="section-body">
            <p>
            Game developers now have access to a vast library of AI-generated images directly within their development environment, enabling an import of visuals as textures, backgrounds, characters, and environmental elements. This collaboration allows asset creation, expediting the design process and offering developers a diverse palette of high-quality visuals to craft captivating gaming experiences.</p>
            </div>          
        </section>
      </main>

      <Footer/>
    </>
  )
}

// esporto la vista
export default Ecosystem