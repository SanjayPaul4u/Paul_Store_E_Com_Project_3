import React, { useRef } from 'react'
import FilterRow from './FilterRow'
import styled from 'styled-components'




const FilterOfcampas = ({ofcampas_ref}) => { // ref - form - MainProduct.jsx
    const close_ofcampas_ref = useRef();
  return (
    <Wrapper>
        <a className="btn btn-primary d-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" ref={ofcampas_ref}>
        Link with href
        </a>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filter</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ref={close_ofcampas_ref}></button>
        </div>
        <div className="offcanvas-body">
            <FilterRow close_ofcampas_ref={close_ofcampas_ref}/>
        </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.offcanvas-body{
    margin-top: -1.2rem;
}
`
export default FilterOfcampas