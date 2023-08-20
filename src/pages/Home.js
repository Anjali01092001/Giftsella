import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import bg from '../images/bg.jpg';
import "../styles/Homestyle.css";
import { useNavigate } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";

const Home = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false)
  const [formData,setFormData]=useState({relation:'',age:'',occasion:'',interests:'',budget:''})
  const [errors,setErrors]=useState({})
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("done");
    const validationErrors={}
    if(!formData.relation.trim()){validationErrors.relation="Relationship is required"}
    if(!formData.age.trim()){validationErrors.age="Age is required"}
    if(!formData.occasion.trim()){validationErrors.occasion="Occasion is required"}
    if(!formData.interests.trim()){validationErrors.interests="Interests is required"}
    if(!formData.budget.trim()){validationErrors.budget="Budget is required"}
    setErrors(validationErrors)
    if(Object.keys(validationErrors).length==0){
      alert("Click ok to see the gifts")
      navigate("/giftcard")
    }
  }
  return (
    <Layout>
      {/* popup modal */}
      <div className='modal'>
      <Modal size='lg'  isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Mention your Details for Gifts
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col lg={12}>
                <div>
                  <label htmlFor='name'>Relationship</label>
                  <input type='text' className='form-control' name="relation" onChange={handleChange} />
                  {errors.relation && <span style={{color:'red'}}>{errors.relation} </span>}
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor='name'>Age</label>
                  <input type='text' className='form-control' name="age" onChange={handleChange} />
                  {errors.age && <span style={{color:'red'}}>{errors.age} </span>}
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor='name'>Occasion</label>
                  <input type='text' className='form-control' name="occasion" onChange={handleChange}/>
                  {errors.occasion && <span style={{color:'red'}}>{errors.occasion} </span>}
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor='name'>Interests</label>
                  <input type='text' className='form-control' name="interests" onChange={handleChange}/>
                  {errors.interests && <span style={{color:'red'}}>{errors.interests} </span>}
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor='name'>Budget</label>
                  <input type='text' className='form-control' name="budget" onChange={handleChange}/>
                  {errors.budget && <span style={{color:'red'}}>{errors.budget} </span>}
                </div>
              </Col>
            </Row>          
            <button type="submit" className='buttonsugg'>Get Gift Suggestions</button>        
          </form>          
        </ModalBody>
      </Modal>
      </div>
       {/* popup modal */}
      <div className='home' style={{ backgroundImage: `url(${bg})` }}>
        <div className="Container">
          <h1>AI Curated Gift Ideas </h1>
          <p>Our AI-powered tool will guide you in choosing the <br /> perfect gift when you're unsure about what to buy.</p>

          <button type="button" onClick={() => setModal(true)} >Get Gift Suggestions</button>

        </div>
      </div>
    </Layout>
  )
}

export default Home;