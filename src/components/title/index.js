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
  getAllSubTitlesAction,UpdateSubTitleAction
} from "@/store/slices/authSlice";
import TreeView from "../treenode";
import { Editor } from '@tinymce/tinymce-react';
import { templateReplaceValues, fields, newTemplate } from "../testdata";
export default function Title({ childCounter }) {
  const dispatch = useDispatch();
  const counterSlice = useSelector((state) => state.auth.titleCounter);
  const titleId = useSelector((state) => state.auth.titleId);
  console.log('0 titleID=',titleId)
  const [TITLEPASSID,SETTITLEPASSID]=useState(0)
  const allTitles = useSelector((state) => state.auth.allTitles);
  console.log('1 allTitles=',allTitles)
  const allSubTitles = useSelector((state) => state.auth.allSubTitles);
  console.log('2 allSubtitles=',allSubTitles)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showH1, setShowH1] = useState(false);
  const [showH2, setShowH2] = useState(false);
  const [arrayOfSubTitlesComponent,setarrayOfSubTitlesComponent]=useState(0)
  const [titleCreate, setTitleCreate] = useState(false);
  const [showComponent, setShowComponent] = useState(true);
  const [titleName, setTitleName] = useState("");
  const [titleNumber, setTitleNumber] = useState("");
  const [arr, setArr] = useState([]);
  const [t_number, setT_number] = useState("");
  const [counter, setCounter] = useState(0);
  const [subtitleCount, setSubtitleCount] = useState(0);

  const [allTitlesArray, setAllTitlesArray] = useState([]);
  const [allSubTitlesArray, setAllSubTitlesArray] = useState([]);

  const [disableButton,setDisableButton]=useState(true)
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
    e.stopPropagation();
  };

  const handleTitleAddT_number = (e) => {
    setIsOpen(false);
    setTitleNumber(e.target.value);
    e.stopPropagation();
  };

  const handleClick = async (e) => {
    setIsOpen(false);
    const formData = new FormData();
    formData.append("name", titleName);
    formData.append("t_number", titleNumber);

    await dispatch(addTitleAction(formData));
    await dispatch(setCounterReducer);
    await dispatch(getAllTitlesAction());
    setDisableButton(false)
  };

  const updatehandleClick = async (passedData) => {
    const formData = new FormData();
    formData.append("passedId", passedData);
    formData.append("name", titleName);
    formData.append("t_number", titleNumber);

    await dispatch(UpdateTitleAction(formData));
  };

  const updateSUBTITLEhandleClick = async (passedData) => {
    console.log('passedData=',passedData)
    const formData = new FormData();
    formData.append("passedId", passedData);
    formData.append("name", titleName);
    formData.append("p_number", titleNumber);

    await dispatch(UpdateSubTitleAction(formData));
    await dispatch(getAllSubTitlesAction());
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
    // setShowH1(true);
    setSubtitleCount(subtitleCount + 1);
    
    if (TITLEPASSID==0){
    SETTITLEPASSID(titleId)
    }

  };

  const handleClickButtonCreateTitle = () => {
    setShowH2(true);
  };

  const AccordionExample = () => {
    const [isOpen, setIsOpen] = useState(false);
  };

  const toggleAccordion = () => {
    console.log('Сработал клик по сабтайтлу')
    setIsOpen(!isOpen);
  };

  const onChange= async(e) =>{
    const content = e.target.getContent();
    console.log(content);
    // setTextInEditor(content)
    // console.log(editorRef.current.getContent());
    // console.log('textEditorVAR=',textInEditor)

     
  }

  return (
    <>
      {titleCreate ? (
        <div>
          <div style={{ width: "100%",'backgroundColor':"gray" }} color="dark" >
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
              {/* {titleName} */}
              <div className="justify-content-end">
                <button onClick={handleClickButtonCreateTitle} className="btn btn-light me-5" disabled={disableButton}>
                  CreateNewTitle
                </button>
                <button onClick={handleClickButtonPlus} className="btn btn-light me-5" disabled={disableButton}>
                  CreateNewSubtitle
                </button>
                <button className="btn btn-light">IN PROGRESS</button>
              </div>
            </div>
          </div>

          {Array.from({ length: subtitleCount }).map((_, index) => (
            <Subtitle key={index} childCounter={counter} passedData={TITLEPASSID} />
          ))}



          {/* {showH1 && <Subtitle childCounter={counter} passedData={titleId} />} */}
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
                {/* {titleName} */}
                <div className="justify-content-end">
                  {/* <button onClick={handleClickCreate} className="btn btn-light me-5" >
                    CreateNewTitle
                  </button>
                  <button onClick={handleClickButtonPlus} className="btn btn-light me-5">
                    CreateNewSubtitle
                  </button> */}

                  <button className="btn btn-light" onClick={() => detelehandleClick(item.id)}>
                    X
                  </button>
                </div>
              </div>
            </div>




              {/* Сабтайтлы */}
            {matchingSubTitles.map((subTitle) => (
              <div key={subTitle.id}>
           

            <div style={{ width: "100%" ,'backgroundColor':"gray"}} color="dark"  className="ms-5">
            {/* <div style={{ width: "100%",'backgroundColor':"gray" }} color="dark"  > */}
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
                  <button onClick={() => updateSUBTITLEhandleClick(subTitle.id)} className="btn btn-light me-5">
                    Изменить
                  </button>
                </div>
                {isOpen==true? <Button onClick={toggleAccordion}>close editor</Button>:<Button onClick={toggleAccordion}>open editor</Button> }
                {/* {titleName} */}
                <div className="justify-content-end">
                  {/* <button onClick={handleClickCreate} className="btn btn-light me-5">
                    CreateNewTitle
                  </button> */}
                  {/* <button onClick={handleClickButtonPlus} className="btn btn-light me-5">
                    CreateNewSubtitle
                  </button> */}
                  <button className="btn btn-light" onClick={() => detelehandleClick(subTitle.id)}>
                    X
                  </button>
                </div>
              </div>
            </div>

            <Collapse isOpen={isOpen}>
                {/* <FroalaEditorComponent tag="textarea" /> */}
                <Editor
                    initialValue={subTitle.text}
                    apiKey='rn7c2nhyq6sboqijw5xcm9xtw3dr4koarjjjlyvklnr35u2r'
                    init={{
                    selector: "#tiny",
                    plugins: "link image code table noneditable template hr importcss",
                    menubar: " format table tools",
                    noneditable_noneditable_class: "mceNonEditable myClass",
                    toolbar:
                        "image undo redo | hr | bold italic | alignleft aligncenter alignright | template | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
                    noneditable_regexp: /{{([^}]*)}}/g,
                    height: 500,
                    template_replace_values: templateReplaceValues,
                    template_preview_replace_values: templateReplaceValues,
                    templates: fields,
                    contextmenu: "table",
                    branding: false
                    //skin_url: "/skins",
                    // skin: "TESTSKIN",
                    //content_css: "TESTSKIN"
                    }}
                    onChange={onChange}
                    //outputFormat='text'
                />
                <button onClick={handleClick} >SAVE with dispatch</button>
            </Collapse>

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
