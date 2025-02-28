import React, { useState } from 'react';
import AccordionItem from './AccordianItem';
import '../styles/Accordian.css';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const courseContent = [
    {
      title: "What is ReactJS",
      content: "ReactJS is a popular JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components and efficiently manage the state of an application. React uses a virtual DOM for optimized performance and fast updates."
    },
    {
      title: "React Components",
      content: "React components are the building blocks of a React application, representing UI elements or parts of the interface. There are two main types: functional components, which are simpler and based on functions, and class components, which use ES6 classes. Components can accept inputs (called props) and manage their own state to render dynamic content."
    },
    {
      title: "React State and Hooks",
      content: "In React, state refers to the data or variables that can change over time and impact how a component renders or behaves. Each component can maintain its own state, which, when updated, triggers a re-render. Hooks are functions that allow you to use state and other React features in functional components. For example, useState allows you to add state, while useEffect manages side effects like fetching data or manipulating the DOM. Hooks simplify component logic, making functional components just as powerful as class components for managing state, side effects, and context."
    },
    {
      title: "React Router",
      content: "React Router is a standard library for routing in React applications, enabling navigation between different views or pages without reloading the entire page. It allows developers to define routes for specific components, manage URL parameters, and handle browser history, providing a seamless single-page application (SPA) experience. React Router supports dynamic routing, enabling the display of components based on the current URL, and allows for features like nested routes, lazy loading, and redirects, making it essential for building complex, multi-page applications in React."
    },
    {
      title: "React Forms and Validation",
      content: "React forms are used to capture user input through form elements like text fields, checkboxes, and radio buttons. They typically involve managing form state, either via controlled components, where form values are tied to React state, or uncontrolled components, where the DOM manages the state. Validation ensures the data entered by users meets specific requirements before submission, which can be implemented using techniques like conditional rendering for error messages, built-in HTML5 validations, or custom validation logic. React provides the flexibility to create complex forms with dynamic validation rules, real-time feedback, and integration with libraries like Formik or React Hook Form to simplify the process and improve maintainability."
    },
    {
      title: "React Performance Optimization",
      content: "React performance optimization focuses on improving the speed and efficiency of rendering and updating components in large applications. Techniques include using React.memo to prevent unnecessary re-renders of functional components, PureComponent for class components to avoid re-renders when props or state haven’t changed, and useMemo and useCallback hooks to memoize values or functions and avoid redundant calculations. Additionally, code-splitting via React.lazy and Suspense allows loading only the necessary parts of an application, reducing initial load time. Properly managing component state and avoiding expensive operations inside the render cycle also play a key role in improving performance, along with leveraging the virtual DOM to efficiently update only the parts of the UI that have changed."
    }
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <h2>ReactJS Course Content</h2>
      {courseContent.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
