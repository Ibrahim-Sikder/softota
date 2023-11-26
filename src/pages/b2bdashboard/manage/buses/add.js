import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import TextEditor from "../../../../../components/TextEditor/TextEditor";
import React, { useState, useEffect } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useRef } from "react";
const Busses = () => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);

  const [getFile, setGetFile] = useState({});
  const [getImage, setGetImage] = useState([]);
  const [value, setValue] = useState("");
  const [operators, setOperators] = useState(null);
  const [typeOfBus, setTypeOfBus] = useState(null);
  const [boardingPoint, setBoardingPoint] = useState(null);
  const [facilities, setFacilities] = useState(null);
  const [price, setPrice] = useState(null);
  const [getDate, setGetDate] = useState(null);
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

  const handleBusData = (e) => {
    e.preventDefault();
    const data = {
      operators: operators,
      type_of_bus: typeOfBus,
      boarding_point: boardingPoint,
      facilities: facilities,
      price: price,
      date: getDate,
      image: getImage,
      description: value,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/bus/details", data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Successfully post bus details.") {
          toast.success("Post successful.");
          formRef.current.reset();

          setGetImage([]);
          setValue("");
        }
        if (
          (response.data =
            "Internal server error" &&
            response.data.message !== "Successfully post bus details.")
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
            <h2 className="text-3xl font-bold text-center">Bus Data Input</h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleBusData}>
                <div className={styles.formControl}>
                  <div>
                    <label>Operators </label>
                    <input
                      onChange={(e) => setOperators(e.target.value)}
                      name="category"
                      placeholder="Operators"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Type of Bus </label>
                    <input
                      onChange={(e) => setTypeOfBus(e.target.value)}
                      name="productCategory"
                      placeholder="Type of Bus "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Boarding Point </label>
                    <input
                      onChange={(e) => setBoardingPoint(e.target.value)}
                      name="category"
                      placeholder="Boarding Point "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Facilities </label>
                    <input
                      onChange={(e) => setFacilities(e.target.value)}
                      name="productCategory"
                      placeholder="Facilities "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Price</label>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      name="category"
                      placeholder="Price"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Date </label>
                    <input
                    onChange={(e) => setGetDate(e.target.value)}
                      name="Date"
                      placeholder="Date "
                      type="date"
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

export default dynamic(() => Promise.resolve(Busses), { ssr: false });
