import React, { useState } from 'react'
import './form.css'

function Form() {
  const [business_stage, setBusiness_stage] = useState('')
  const [age_of_establishment, setAge_of_establishment] = useState(0)
  const [primary_product_service_offered,setPrimary_product_service_offered] = useState('')
  const [offered_to,setOffered_to] = useState('')
  const [secondary_product_service_offered,setSecondary_product_service_offered] = useState('')
  const [processed_products,setProcessed_products] = useState('')
  const [relevant_experience,setRelevant_experience] = useState(0)
  const [skill_training,setSkill_training] = useState('')
  const [usp,setUsp] = useState([])
  const [establishment_type,setEstablishment_type] = useState('')
  const [business_area,setBusiness_area] = useState('')
  const [business_locality,setBusiness_locality] = useState('')
  const [infra_ownership,setInfra_ownership] = useState('')
  const [establishment_area,setEstablishment_area] = useState(0)
  const [reason_for_location,setReason_for_location] = useState('')
  const [market_research,setMarket_research] = useState('')
  const [primary_market,setPrimary_market] = useState('')
  const [customers,setCustomers] = useState('')
  const [seasonality,setSeasonality] = useState('')
  const [competition,setCompetition] = useState('')
  const [suppliers,setSuppliers] = useState('')
  const [ marketing_avenues,setMarketing_avenues] = useState('')
  const [scaleup_potential,setScaleup_potential] = useState('')
  
  function handleSelect(e) {
    setBusiness_stage(e.target.value)
    console.log(business_stage)
  }

  function handleChange(e) {
    setAge_of_establishment(e.target.value)
    if (e.target.value < 0) {
      e.target.value = 0
      alert('Value should be greater than 0')
    }
    if (e.target.value > 100) {
      e.target.value = 100
      alert('Value should be less than 100')
    }
    console.log(age_of_establishment)
  }


  function handleChange_primaryProduct(e){
      setPrimary_product_service_offered(e.target.value)
      console.log(primary_product_service_offered)
  }

  function handleSelect_offeredto(e) {
    setOffered_to(e.target.value)
    console.log(offered_to)
  }
  
  function handleChange_secondaryProduct(e){
    setSecondary_product_service_offered(e.target.value)
    console.log(secondary_product_service_offered)
}

function handleChange_processed(e){
    setProcessed_products(e.target.value)
    console.log(processed_products)
}

function handleChange_relevent(e){
    setRelevant_experience(e.target.value)
    console.log(relevant_experience)
}

function handleSelect_skill(e) {
    setSkill_training(e.target.value)
    console.log(skill_training)
  }

  function handleSelect_establish(e){
     setEstablishment_type(e.target.value)
     console.log(establishment_type)
  }

  function handleBusiness(e){
    setBusiness_area(e.target.value)
      console.log(business_area)
  }

  function handlebusiness_locality(e){
    setBusiness_locality(e.target.value)
    console.log(business_locality)
  }

  function handleinfra_ownership(e){
      setInfra_ownership(e.target.value)
      console.log(infra_ownership)
  }

  function handleestablishment_area(e){
      setEstablishment_area(e.target.value)
      console.log(establishment_area)
  }

  function handle_market_research(e){
    setMarket_research(e.target.value)
      console.log(market_research)
  }

  function handle_primary_market(e){
      setPrimary_market(e.target.value)
      console.log(primary_market)
  }

  function handle_customers(e){
      setCustomers(e.target.value)
      console.log(customers)
  }

  function handle_seasonality(e){
      setSeasonality(e.target.value)
      console.log(seasonality)
  }

  function handle_competition(e){
      setCompetition(e.target.value)
      console.log(competition)
  }

  function handle_suppliers(e){
      setSuppliers(e.target.value)
      console.log(suppliers)
  }

  function handle_usp(e){
      if(e.target.checked){
          setUsp([...usp, e.target.value])
      }else{
          setUsp([usp.filter((f) =>
              e.target.value !== f 
          )])
      }
  }

  function handle_reason_for_location(e){
    if(e.target.checked){
      setReason_for_location([...usp, e.target.value])
      }else{
        setReason_for_location([usp.filter((f) =>
          e.target.value !== f 
      )])
  }
  }
 
  function handle_marketing_avenues(e){
    if(e.target.checked){
      setMarketing_avenues([...usp, e.target.value])
      }else{
        setMarketing_avenues([usp.filter((f) =>
          e.target.value !== f 
      )])
  }
  }

  function handle_scaleup_potential(e){
    if(e.target.checked){
      setScaleup_potential([...usp, e.target.value])
      }else{
        setScaleup_potential([usp.filter((f) =>
          e.target.value !== f 
      )])
  }
  }

  console.log(usp,reason_for_location,marketing_avenues,scaleup_potential)

  return (
    <div className="main">
    <div>
      <form>
        <div>
          <h1>Enter your Business Details</h1>
          <label>Stage of business : </label>
          <select onChange={handleSelect}>
            <option value="Start-up">Start-up</option>
            <option value="Scale-up">Scale-up</option>
          </select>
        </div>

        <div>
          <label>Age of establishment (years) : </label>
          <input
            type="number"
            onChange={handleChange}
            min="0"
            max="100"
            placeholder='Enter 0 if it is yet to start-up'
          ></input>
        </div>

        <div>
          <label>Primary Products/Services offfered : </label>
          <input type="text" onChange={handleChange_primaryProduct}></input>
        </div>

        <div>
          <label>Offered to : </label>
          <select onChange={handleSelect_offeredto}>
            <option value="Endcustomers">End customers</option>
            <option value="Wholesalers">Wholesalers</option>
            <option value="Distributors">Distributors</option>
            <option value="Retailers">Retailers</option>
          </select>
        </div>

        <div>
          <label>Secondary Products/Services offfered : </label>
        <input type="text" onChange={handleChange_secondaryProduct}></input>
        </div>

        <div>
          <label>Processed products : </label>
        <input type="text" onChange={handleChange_processed} placeholder='Products you produce from the raw materials'></input>
        </div>

        <div>
          <label>Years of relevant experience in this field : </label>
        <input type="number" onChange={handleChange_relevent}></input>
        </div>

        <div>
          <label>Skill training : </label>
          <select onChange={handleSelect_skill}>
            <option value="No_formal_skill_training">No formal skill training</option>
            <option value="Has_formal_skill_training">Has formal skill training and certificate</option>
          </select>
        </div>

        <div>
          <h3>Unique Selling Proposition</h3>
        <span>the entrepreneur's experience in this field</span> <input type="checkbox" value="experience" onChange={handle_usp} ></input> <br/>
        <span>innovative product/service</span> <input type="checkbox" value="product" onChange={handle_usp} ></input><br/>
        <span>high profit margin, high growth potential</span> <input type="checkbox" value="profit" onChange={handle_usp} ></input><br/>
        <span>superior customer support</span> <input type="checkbox" value="support" onChange={handle_usp} ></input><br/>
        <span>quality and affordable products/service</span> <input type="checkbox" value="quality" onChange={handle_usp} ></input><br/>
        <span>high demand in the target market (forward linkage)</span> <input type="checkbox" value="market" onChange={handle_usp} ></input><br/>
        <span>abundant supply of raw materials (backward linkage)</span> <input type="checkbox" value="materials" onChange={handle_usp} ></input><br/>
        <span>wide range of products/services</span> <input type="checkbox" value="range" onChange={handle_usp} ></input><br/>
        <span>robust value-chain of the business</span> <input type="checkbox" value="robust" onChange={handle_usp} ></input><br/>
        <span>frequency of customer visits</span> <input type="checkbox" value="frequency" onChange={handle_usp} ></input><br/>
        </div>

        <div>
          <label>Establishment type : </label>
          <select onChange={handleSelect_establish}>
            <option value="Factory">Factory</option>
            <option value="Mill">Mill</option>
            <option value="Mill">Stall</option>
            <option value="Workshop">Workshop</option>
            <option value="Boutique">Boutique</option>
            <option value="Vehicle">Vehicle</option>
            <option value="Centre">Centre</option>
            <option value="Store">Store</option>
            <option value="Farm">Farm,</option>
            <option value="Plant">Plant, </option>
            <option value="Processing">Processing</option>
            <option value="Unit">unit</option>
            <option value="Shop">Shop</option>
            <option value="Vending_cart">Vending cart</option>
            <option value="Manufacturing_unit">Manufacturing unit</option>
          </select>
        </div>

        <div>
          <label>Name of the area : </label>
            <input type="text" onChange={handleBusiness}></input>
        </div>

        <div>
          <label>Locality of business : </label>
        <select onChange={handlebusiness_locality}>
            <option value="Urban">Urban</option>
            <option value="Rural">Rural</option>
            <option value="Semi_urban">Semi-urban</option>
            <option value="Slum">Slum</option>
          </select>
        </div>

        <div>
          <label>Ownership of infrastructure : </label>
        <select onChange={handleinfra_ownership}>
            <option value="Rented">Rented</option>
            <option value="Leased">Leased</option>
            <option value="Self_owned">Self-owned</option>
          </select>
        </div>

        <div>
          <label>Establishment area (in square feet) : </label>
            <input type="number" onChange={handleestablishment_area} placeholder="Enter 0 if the establishment area is irrelevant"></input>
        </div>

        <div>
          <label>Reason for selecting this location : </label>
        <span>Nearness to market</span> <input type="checkbox" value="Nearness" onChange={handle_reason_for_location} ></input><br/>
        <span>Good footfall</span> <input type="checkbox" value="footfall" onChange={handle_reason_for_location} ></input><br/>
        <span>Nearness to source of raw materials</span> <input type="checkbox" value="Nearness_to_source" onChange={handle_reason_for_location} ></input><br/>
        <span>Nearness to targeted customer demographics</span> <input type="checkbox" value="Nearness_to_targeted" onChange={handle_reason_for_location} ></input><br/>
        <span>Lesser competition around</span> <input type="checkbox" value="Lesser" onChange={handle_reason_for_location} ></input><br/>
        <span>Access to permit/license of operate</span> <input type="checkbox" value="Access_to_permit" onChange={handle_reason_for_location} ></input><br/>
        <span>Nearness to suppliers</span> <input type="checkbox" value="Nearness_to_suppliers" onChange={handle_reason_for_location} ></input><br/>
        <span>Affordability (rent)</span> <input type="checkbox" value="Affordability" onChange={handle_reason_for_location} ></input><br/>
        <span>No rental overheads</span> <input type="checkbox" value="No_rental" onChange={handle_reason_for_location} ></input><br/>
        <span>Other such factors</span> <input type="checkbox" value="Other" onChange={handle_reason_for_location} ></input><br/>
        </div>

        <div>
          <label>Market research : </label>
        <select onChange={handle_market_research}>
            <option value="Not_conducted">Not conducted</option>
            <option value="conducted">Market research has been conducted </option>
          </select>
        </div>

        <div>
          <label>Primary market : </label>
        <select onChange={handle_primary_market}>
            <option value="Local">Local</option>
            <option value="Regional">Regional</option>
            <option value="National">National</option>
            <option value="International">International</option>
          </select>
        </div>

        <div>
          <label>Customers : </label>
            <input type="text" onChange={handle_customers}></input>
        </div>

        <div>
          <label>Seasons of high sales : </label>
        <select onChange={handle_seasonality}>
            <option value="Consistent_sales">Consistent sales across all seasons</option>
            <option value="Higher_sales">Higher sales in festive seasons</option>
            <option value="High_sales">High sales in cropping/cultivation season</option>
            <option value="High_sales_peak">High sales in peak seasons</option>
          </select>
        </div>

        <div>
          <label>Competition : </label>
        <select onChange={handle_competition}>
            <option value="no_similar">No similar goods/service provider in this locality</option>
            <option value="only_few">Only a few similar goods/service providers in this locality</option>
            <option value="similar_goods">Many similar goods/service providers in this locality</option>
          </select>
        </div>

        <div>
          <label>List of Suppliers : </label>
            <input type="text" onChange={handle_suppliers}></input>
        </div>

        <div>
          <h3>Marketing avenues  </h3>
        <span>Distribution of marketing material (pamphlets/flyers)</span> <input type="checkbox" value="Distribution" onChange={handle_marketing_avenues} ></input><br/>
        <span>storefront/business branding</span> <input type="checkbox" value="storefront" onChange={handle_marketing_avenues} ></input><br/>
        <span>Seasonal discounts and offers</span> <input type="checkbox" value="Seasonal_discounts " onChange={handle_marketing_avenues} ></input><br/>
        <span>Cross-promotion </span> <input type="checkbox" value="Cross_promotion" onChange={handle_marketing_avenues} ></input><br/>
        <span>Digital Marketing </span> <input type="checkbox" value="Digital_Marketing" onChange={handle_marketing_avenues} ></input><br/>
        <span>Word of mouth</span> <input type="checkbox" value=">Word_of_moutht" onChange={handle_marketing_avenues} ></input><br/>
        </div>

        <div>
          <h3>Avenues of scaling up in future  </h3>
        <span>increasing the variety of product/service offering</span> <input type="checkbox" value="variety_of_product" onChange={handle_scaleup_potential} ></input><br/>
        <span>expanding the current offering to other geographies</span> <input type="checkbox" value="expanding" onChange={handle_scaleup_potential} ></input><br/>
        <span>opening more outlets</span> <input type="checkbox" value="opening_more " onChange={handle_scaleup_potential} ></input><br/>
        <span>growing the scale of operation </span> <input type="checkbox" value="growing_the_scale" onChange={handle_scaleup_potential} ></input><br/>
        <span>building value-chain integrations</span> <input type="checkbox" value="value_chain" onChange={handle_scaleup_potential} ></input><br/>
        <span>other allied revenue streams</span> <input type="checkbox" value=">revenue_streams" onChange={handle_scaleup_potential} ></input><br/>
        </div>



      </form>
    </div>
     
     <div className="display">
        <h1>Your Data </h1>
        <p>$name is looking to $business_stage their business of $business_idea.</p>
        <p>This enterprise has been operational since $age_of_establishment years and has been serving its customers since then.</p>
        <p>This establishment offers products/services like- $product_service_offered to $offered_to.</p>
        <p>In addition, the enterprise shall also be involved in- $secondary_product_service_offered</p>
        <p>Other products of the enterprise shall include- $processed_products</p>
        <p>$name has relevant experience of $relevant_experience years in this field. </p>
        <p>The entrepreneur $skill_training in this field of work.</p>
        <p>The enterprise is uniquely positioned because of its - </p>
        <p>The $establishment_type is located in $business_locality area of $city in a $infra_ownership property.</p>
        <p>The size of the establishment is $establishment_area sq.ft.</p>
        <p>This locality is selected because of $array{'$reason_for_location'}.</p>
        <p>$market_research and the range of products and target market has been identified after that.</p>
        <p>The enterprise shall focus on offering its products/services to $primary_market markets. </p>
        <p>Our customers shall include- $customers</p>
        <p>The nature of the business is such that we expect $seasonality.</p>
        <p>Regarding competition, there are $competition.</p>
        <p>The enterprise shall procure goods/raw materials from $suppliers.</p>
        <p>Our marketing avenues to reach the targeted customers shall include- $marketing_avenues</p>
        <p>The various foreseeable avenues of scaling up and growing the business in the foreseeable future include- $scaleup_potential.</p>
     </div>
    </div>
  )
}

export default Form
