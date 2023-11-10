import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Collapse,
  Card,
  CardBody,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Subtitle from "@/components/subtitle";
import {
  addTitleAction,
  getAllTitlesAction,
  UpdateTitleAction,
  deleteTitleAction,
  setCounterReducer,
  getAllTitles,
  getAllSubTitlesAction
} from "@/store/slices/authSlice";
import TreeView from "../treenode";

export default function Title({ childCounter }) {
  const dispatch = useDispatch();
  const counterSlice = useSelector((state) => state.auth.titleCounter);
  const titleId = useSelector((state) => state.auth.titleId);
  const allTitles = useSelector((state) => state.auth.allTitles);
  console.log('1 allTitles=',allTitles)
  const allSubTitles = useSelector((state) => state.auth.allSubTitles);
  console.log('2 allSubtitles=',allSubTitles)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showH1, setShowH1] = useState(false);
  const [showH2, setShowH2] = useState(false);
  const [titleCreate, setTitleCreate] = useState(false);
  const [showComponent, setShowComponent] = useState(true);
  const [titleName, setTitleName] = useState("");
  const [titleNumber, setTitleNumber] = useState("");
  const [arr, setArr] = useState([]);
  const [t_number, setT_number] = useState("");
  const [counter, setCounter] = useState(0);

  const [allTitlesArray, setAllTitlesArray] = useState([]);
  const [allSubTitlesArray, setAllSubTitlesArray] = useState([]);

  useEffect(() => {
    dispatch(getAllTitlesAction());
    dispatch(getAllSubTitlesAction());
  }, [dispatch]);

  useEffect(() => {
    setAllTitlesArray(allTitles);
    setAllSubTitlesArray(allSubTitles)
    console.log('in use effect allTitlesArray',allTitlesArray)
  }, [allTitles,allSubTitles]);

  const handleClickCreate = () => {
    setCounter(counterSlice);
    setTitleCreate(true);
    console.log("after creating allTitles:", allTitles);
  };

  const handleComponentClick = () => {
    setShowComponent(false);
  };

  const handleTitleinputChange = (e) => {
    setIsOpen(false);
    setTitleName(e.target.value);
  };

  const handleTitleAddT_number = (e) => {
    setIsOpen(false);
    setTitleNumber(e.target.value);
  };

  const handleClick = async (e) => {
    setIsOpen(false);
    const formData = new FormData();
    formData.append("name", titleName);
    formData.append("t_number", titleNumber);

    await dispatch(addTitleAction(formData));
    await dispatch(setCounterReducer);
    await dispatch(getAllTitlesAction());
  };

  const updatehandleClick = async (passedData) => {
    const formData = new FormData();
    formData.append("passedId", passedData);
    formData.append("name", titleName);
    formData.append("t_number", titleNumber);

    await dispatch(UpdateTitleAction(formData));
  };

  const detelehandleClick = async (passedData) => {
    const formData = new FormData();
    formData.append("passedId", passedData);

    await dispatch(deleteTitleAction(passedData));
    await dispatch(getAllTitlesAction());

  };

  useEffect(() => {
    setCounter(counterSlice);
  }, [counterSlice, dispatch, titleId]);

  const handleClickButtonPlus = () => {
    setShowH1(true);
  };

  const handleClickButtonCreateTitle = () => {
    setShowH2(true);
  };

  const AccordionExample = () => {
    const [isOpen, setIsOpen] = useState(false);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {titleCreate ? (
        <div>
          <div style={{ width: "100%",'backgroundColor':"gray" }} color="dark" onClick={toggleAccordion}>
            <div className="d-flex justify-content-between">
              <div className="justify-content-start">
                <input
                  onChange={handleTitleAddT_number}
                  type="text"
                  placeholder="введине #"
                  style={{ width: "100px" }}
                  className="me-2"
                />
                <input onChange={handleTitleinputChange} type="text" placeholder="введите наименование" />
                <button onClick={handleClick} className="btn btn-light me-5">
                  save
                </button>
              </div>
              {titleName}
              <div className="justify-content-end">
                <button onClick={handleClickButtonCreateTitle} className="btn btn-light me-5">
                  CreateNewTitle
                </button>
                <button onClick={handleClickButtonPlus} className="btn btn-light me-5">
                  CreateNewSubtitle
                </button>
                <button className="btn btn-light">IN PROGRESS</button>
              </div>
            </div>
          </div>
          {showH1 && <Subtitle childCounter={counter} passedData={titleId} />}
          {showH2 && counter < 5 && <Title childCounter={counter + 1} />}
        </div>
      ) : (
        <>
          <button onClick={handleClickCreate} className="btn btn-info me-5">
            Добавить title
          </button>
        </>
      )}

      <br />
      <br />
      <br />
      <br />

      <br />
      <br />

      <br />
      <br />
      <br />
      <h1>Ваши данные</h1>
      {/* {allTitlesArray.map((item) => (
        console.log('item=',allTitlesArray),
        <div key={item.id}>
          <span>
            title number= {item.t_number} title name= {item.name}, {item.id}
          </span>
          <div style={{ width: "100%" ,'backgroundColor':"gray"}} color="dark" onClick={toggleAccordion}>
            <div className="d-flex justify-content-between">
              <div className="justify-content-start">
                <input
                  onChange={handleTitleAddT_number}
                  type="text"
                  placeholder={item.t_number}
                  style={{ width: "100px" }}
                  className="me-2"
                />
                <input onChange={handleTitleinputChange} type="text" placeholder={item.name} />
                <button onClick={() => updatehandleClick(item.id)} className="btn btn-light me-5">
                  Изменить
                </button>
              </div>
              {titleName}
              <div className="justify-content-end">
                <button onClick={handleClickCreate} className="btn btn-light me-5">
                  CreateNewTitle
                </button>
                <button onClick={handleClickButtonPlus} className="btn btn-light me-5">
                  CreateNewSubtitle
                </button>
                <button className="btn btn-light" onClick={() => detelehandleClick(item.id)}>
                  X
                </button>
              </div>
            </div>
          </div>

          {showH1 && <Subtitle childCounter={counter} passedData={item.id} />}
          {showH2 && counter < 5 && <Title childCounter={counter + 1} />}
        </div>
      ))} */}



{/* {allTitlesArray.map((item) => {
    console.log('1 item=',item)
  return (

        allSubTitlesArray.map((item2)=>{
          

    



        

             if (item.id == item2.TitleId) {
              console.log('vetka true staeted'),
              console.log('item.id=', item.id, 'item2', item2.TitleId);
              return (
          <div key={item.id}>
             
            <div style={{ width: "100%" ,'backgroundColor':"gray"}} color="dark" onClick={toggleAccordion}>
              <div className="d-flex justify-content-between">
                <div className="justify-content-start">
                  <input
                    onChange={handleTitleAddT_number}
                    type="text"
                    placeholder={item.t_number}
                    style={{ width: "100px" }}
                    className="me-2"
                  />
                  <input onChange={handleTitleinputChange} type="text" placeholder={item.name} />
                  <button onClick={() => updatehandleClick(item.id)} className="btn btn-light me-5">
                    Изменить
                  </button>
                </div>
                {titleName}
                <div className="justify-content-end">
                  <button onClick={handleClickCreate} className="btn btn-light me-5">
                    CreateNewTitle
                  </button>
                  <button onClick={handleClickButtonPlus} className="btn btn-light me-5">
                    CreateNewSubtitle
                  </button>
                  <button className="btn btn-light" onClick={() => detelehandleClick(item.id)}>
                    X
                  </button>
                </div>
              </div>
            </div>

            <div style={{ width: "100%" ,'backgroundColor':"gray"}} color="dark" onClick={toggleAccordion} className="ms-5">
              <div className="d-flex justify-content-between">
                <div className="justify-content-start">
                  <input
                    onChange={handleTitleAddT_number}
                    type="text"
                    placeholder={item2.p_number}
                    style={{ width: "100px" }}
                    className="me-2"
                  />
                  <input onChange={handleTitleinputChange} type="text" placeholder={item2.name} />
                  <button onClick={() => updatehandleClick(item2.id)} className="btn btn-light me-5">
                    Изменить
                  </button>
                </div>
                {titleName}
                <div className="justify-content-end">
                  <button onClick={handleClickCreate} className="btn btn-light me-5">
                    CreateNewTitle
                  </button>
                  <button onClick={handleClickButtonPlus} className="btn btn-light me-5">
                    CreateNewSubtitle
                  </button>
                  <button className="btn btn-light" onClick={() => detelehandleClick(item2.id)}>
                    X
                  </button>
                </div>
              </div>
            </div>




          

            {showH1 && <Subtitle childCounter={counter} passedData={item.id} />}
            {showH2 && counter < 5 && <Title childCounter={counter + 1} />} 
          </div>
      
        )}
          else(item.id != item2.TitleId)
          console.log('else vetka',item)
          {
        return(<>
        
             
              <div style={{ width: "100%" ,'backgroundColor':"gray"}} color="dark" onClick={toggleAccordion}>
                <div className="d-flex justify-content-between">
                  <div className="justify-content-start">
                    <input
                      onChange={handleTitleAddT_number}
                      type="text"
                      placeholder={item.t_number}
                      style={{ width: "100px" }}
                      className="me-2"
                    />
                    <input onChange={handleTitleinputChange} type="text" placeholder={item.name} />
                    <button onClick={() => updatehandleClick(item.id)} className="btn btn-light me-5">
                      Изменить
                    </button>
                  </div>
                  {titleName}
                  <div className="justify-content-end">
                    <button onClick={handleClickCreate} className="btn btn-light me-5">
                      CreateNewTitle
                    </button>
                    <button onClick={handleClickButtonPlus} className="btn btn-light me-5">
                      CreateNewSubtitle
                    </button>
                    <button className="btn btn-light" onClick={() => detelehandleClick(item.id)}>
                      X
                    </button>
                  </div>
                </div>
              </div>
          
        </>)
            
          }
     
          })
  )
        })}  */}


      {allTitlesArray.map((item) => {
        console.log('1 item=', item);

        const matchingSubTitles = allSubTitlesArray.filter((item2) => item2.TitleId === item.id);

        return (
          <div key={item.id}>
            {/* Your title rendering code... */}
            <div style={{ width: "100%" ,'backgroundColor':"gray"}} color="dark" onClick={toggleAccordion}>
              <div className="d-flex justify-content-between">
                <div className="justify-content-start">
                  <input
                    onChange={handleTitleAddT_number}
                    type="text"
                    placeholder={item.t_number}
                    style={{ width: "100px" }}
                    className="me-2"
                  />
                  <input onChange={handleTitleinputChange} type="text" placeholder={item.name} />
                  <button onClick={() => updatehandleClick(item.id)} className="btn btn-light me-5">
                    Изменить
                  </button>
                </div>
                {titleName}
                <div className="justify-content-end">
                  <button onClick={handleClickCreate} className="btn btn-light me-5">
                    CreateNewTitle
                  </button>
                  <button onClick={handleClickButtonPlus} className="btn btn-light me-5">
                    CreateNewSubtitle
                  </button>
                  <button className="btn btn-light" onClick={() => detelehandleClick(item.id)}>
                    X
                  </button>
                </div>
              </div>
            </div>

            {matchingSubTitles.map((subTitle) => (
              <div key={subTitle.id}>
           

            <div style={{ width: "100%" ,'backgroundColor':"gray"}} color="dark" onClick={toggleAccordion} className="ms-5">
              <div className="d-flex justify-content-between">
                <div className="justify-content-start">
                  <input
                    onChange={handleTitleAddT_number}
                    type="text"
                    placeholder={subTitle.p_number}
                    style={{ width: "100px" }}
                    className="me-2"
                  />
                  <input onChange={handleTitleinputChange} type="text" placeholder={subTitle.name} />
                  <button onClick={() => updatehandleClick(subTitle.id)} className="btn btn-light me-5">
                    Изменить
                  </button>
                </div>
                {titleName}
                <div className="justify-content-end">
                  <button onClick={handleClickCreate} className="btn btn-light me-5">
                    CreateNewTitle
                  </button>
                  <button onClick={handleClickButtonPlus} className="btn btn-light me-5">
                    CreateNewSubtitle
                  </button>
                  <button className="btn btn-light" onClick={() => detelehandleClick(subTitle.id)}>
                    X
                  </button>
                </div>
              </div>
            </div>


              </div>
            ))}

         

{showH1 && <Subtitle childCounter={counter} passedData={item.id} />}
            {showH2 && counter < 5 && <Title childCounter={counter + 1} />} 
          </div>
        );
      })}
      {/* <TreeView/> */}
    </>
  );
}
