import styling from "../../profile.module.css";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import TextEditor from "../../../../../components/TextEditor/TextEditor";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import toast from "react-hot-toast";

const PreRegistrationProcess = () => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);

  const [getFile, setGetFile] = useState({});
  const [getImage, setGetImage] = useState([]);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState(null);
  const [subTitle, setSubTitle] = useState(null);
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

  const handleHajjPreRegistration = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      sub_title: subTitle,
      image: getImage,
      description: value,
      hajj_category: "Brief History Of Hajj Data Input",
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/hajj/details", data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Post hajj package details.") {
          toast.success("Post successful.");
          formRef.current.reset();
          setTitle(null);
          setSubTitle(null);
          setGetImage([]);
          setValue("");
        }
        if (
          (response.data =
            "Internal server error" &&
            response.data.message !== "Post hajj package details.")
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
              Pre-Registration-Process Data Input
            </h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleHajjPreRegistration}>
                <div className={styles.formControl}>
                  <div>
                    <label>Title </label>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      name="category"
                      placeholder="Title"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Sub Title</label>
                    <input
                      onChange={(e) => setSubTitle(e.target.value)}
                      name="sub title"
                      placeholder="Sub title"
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
                    <label>Description </label>
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
                </div>

                <div className={styles.formControl}>
                  <button disabled={loading ? true: false} className={styles.submitBtn} type="submit">
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

export default dynamic(() => Promise.resolve(PreRegistrationProcess), {
  ssr: false,
});
