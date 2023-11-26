import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import TextEditor from "../../../../../components/TextEditor/TextEditor";
import React, { useState, useEffect, useRef } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import axios from "axios";
const Tours = () => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);

  const [getFile, setGetFile] = useState({});
  const [getImage, setGetImage] = useState([]);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState(null);
  const [subTitle, setSubTitle] = useState(null);
  const [getDate, setGetDate] = useState(null);
  const [price, setPrice] = useState(null);
  const [included, setIncluded] = useState(null);
  const [excluded, setExcluded] = useState(null);
  const [itinary, setItinary] = useState(null);
  const [categoryType, setCategoryType] = useState(null);
  const [productCategory, setProductCategory] = useState(null);
  const [priceLowToHigh, setPriceLowToHight] = useState(null);
  const [priceHighToLow, setPriceHighToLow] = useState(null);

  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  let files;
  const handlePdf = async (e) => {
    setGetFile(e.target.files);
    try {
      files = e.target.files;
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("pdfFiles", files[i]);
      }
      const response = await fetch("http://localhost:5000/api/v1/uploads/pdf", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.message === "success") {
        setGetImage(data.imageLinks);
        // console.log(data.imageLinks);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleToursData = (e) => {
    e.preventDefault();
    const data = {
       
      title: title,
      sub_title: subTitle,
      date: getDate,
      price:price,
      included:included,
      excluded:excluded,
      itinary:itinary,
      category_type:categoryType,
      product_category:productCategory,
      price_low_to_hight:priceLowToHigh,
      price_hight_to_low:priceHighToLow,
      image: getImage,
      description: value,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/tours/details", data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Successfully tours details posted.") {
          toast.success("Post successful.");
          formRef.current.reset();
        }
        if (
          (response.data =
            "Internal server error" &&
            response.data.message !== "Successfully tours details posted.")
        ) {
          toast.error("Please fill all the field.");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <B2BdashboardLayout>
      <MoveText />

      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
              Tours Data Input{" "}
            </h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleToursData}>
                <div className={styles.formControl}>
                  <div>
                    <label>Title </label>
                    <input
                    onChange={(e)=>setTitle(e.target.value)}
                      name="category"
                      placeholder="Title "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Sub Title</label>
                    <input
                    onChange={(e)=>setSubTitle(e.target.value)}
                      name="productCategory"
                      placeholder="Sub Title "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Date</label>
                    <input
                    onChange={(e)=>setGetDate(e.target.value)}
                      name="date"
                      placeholder="Date "
                      type="date"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Price </label>
                    <input
                    onChange={(e)=>setPrice(e.target.value)}
                      name="price"
                      placeholder="Price"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> What is included </label>
                    <input
                    onChange={(e)=>setIncluded(e.target.value)}
                      name="title"
                      placeholder="What is included "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> What is excluded </label>
                    <input
                     onChange={(e)=>setExcluded(e.target.value)}
                      name="subTitle"
                      placeholder="What is excluded "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Itinary </label>
                    <input
                     onChange={(e)=>setItinary(e.target.value)}
                      name="title"
                      placeholder="Itinary"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Category Type </label>
                    <input
                     onChange={(e)=>setCategoryType(e.target.value)}
                      name="subTitle"
                      placeholder="Category Type  "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Product Category </label>
                    <input
                     onChange={(e)=>setProductCategory(e.target.value)}
                      name="title"
                      placeholder="Product Category "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Price Low To Hight </label>
                    <input
                     onChange={(e)=>setPriceLowToHight(e.target.value)}
                      name="subTitle"
                      placeholder="Price Low To Hight "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Price Hight To Low </label>
                    <input
                     onChange={(e)=>setPriceHighToLow(e.target.value)}
                      name="title"
                      placeholder=" Price Hight To Low  "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div className={styles.uploadFile}>
                    {getFile[0]?.name ? (
                      <label for="files">{getFile[0]?.name}</label>
                    ) : (
                      <label for="files">
                        {" "}
                        <CloudUpload className={styles.uploadIcon} /> Image
                        Upload{" "}
                      </label>
                    )}

                    <input
                      onChange={handlePdf}
                      name="image"
                      // accept=".jpg/.jpeg/.png"
                      className={styles.inputField}
                      type="file"
                      id="files"
                      class="hidden"
                      multiple
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <ReactQuill
                      value={value}
                      onChange={setValue}
                      modules={{
                        toolbar: [
                          [{ font: [] }],
                          [{ size: ["small", false, "large", "huge"] }],
                          [{ header: [1, 2, 3, 4, 5, 6, false] }],
                          [{ color: [] }, { background: [] }],
                          [{ align: [] }],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["bold", "italic", "underline"],
                          [{ align: [] }],
                          ["link", "image"],
                          ["video"],
                          ["clean"],
                          ["blockquote", "code-block"],
                          ["direction"],
                          ["formula"],
                          ["strike"],
                        ],
                      }}
                    />
                  </div>
                </div>

                <div className={styles.formControl}>
                  <button disabled={loading ? true : false} className={styles.submitBtn} type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Tours), { ssr: false });
