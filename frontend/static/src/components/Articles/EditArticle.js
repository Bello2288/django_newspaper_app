import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function EditArticle({ state }) {
  const [isEdit, setIsEdit] = useState(false);
  const [article, setArticle] = useState({
    image: state.image,
    title: state.title,
    body: state.body,
    category: state.category,
    status: state.status,
  });

  const navigate = useNavigate();

  const handleError = (err) => {
    console.warn(err);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setArticle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setArticle({
      ...state,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (article.image instanceof File) {
      formData.append("image", article.image);
    }

    formData.append("title", article.title);
    formData.append("body", article.body);
    formData.append("category", article.category);
    formData.append("status", e.target.value);

    const options = {
      method: "PUT",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: formData,
    };

    const response = await fetch(`/api/v1/articles/${state.id}/`, options).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      console.log(data);
      navigate("/");
    }
  };

  const nonEditHTML = (
    <>
      <img className="highlight-img" src={state.image} alt="news article" />
      <h2 className="highlight-title">{state.title}</h2>
      <p className="highlight-body">{state.body}</p>
      {state.status === "Draft" && (
        <>
          <Button variant="dark" type="submit" value="Submitted" onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
          <Button variant="dark" type="button" onClick={() => setIsEdit(true)}>
            Edit
          </Button>
        </>
      )}
    </>
  );

  const editHTML = (
    <>
      <Form>
        <input type="file" class="form-control-file" name="image" onChange={handleImage} />
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Article Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={article.title}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="body">
          <Form.Label>Article Body</Form.Label>
          <textarea
            rows="3"
            placeholder="Body..."
            name="body"
            value={article.body}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Choose Category</Form.Label>
          <Form.Select name="category" value={article.category} onChange={handleInput}>
            <option value="ALL">All</option>
            <option value="FOOTBALL">Football</option>
            <option value="HOCKEY">Hockey</option>
            <option value="BASEBALL">Baseball</option>
            <option value="BASKETBALL">Basketball</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <Button variant="dark" type="submit" value="Submitted" onClick={(e) => handleSubmit(e)}>
        Save and Submit
      </Button>
      <Button variant="dark" type="submit" value="Draft" onClick={(e) => handleSubmit(e)}>
        Save as Draft
      </Button>
    </>
  );

  return <>{isEdit ? editHTML : nonEditHTML}</>;
}

export default EditArticle;