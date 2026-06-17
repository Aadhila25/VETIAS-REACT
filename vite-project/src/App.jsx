function App (){
  return(
    <div 
    style={{
      width:"700px",
      margin: "30px auto",
      padding:"25px",
      borderRadius:"15px",
      boxShadow:"0 0 15px rgba(0,0,0,0.2)"
    }}>
      <h1
      style={{
        textAlign:"center"
      }}>Learner Registration</h1>
      <input

          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
          setName(e.target.value)
        }

          style={inputStyle}
      />

      <input
      type="email" 
      placeholder="Enter Email" 
      value={email}
      onChange={(e) =>
        setEmail(e.target.value)
      }
    style={inputStyle}
      />
      <input 
      type="text" 
      placeholder="Enter Department" 
      value={department}
      onChange={(e)=>
        setDepartment(e.target.value)
      
      }

      style={inputStyle}

      />
        <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) =>
          setAge(e.target.value)

        }
      style={inputStyle}
      />

      <button

      onClick={handleSubmit}
      style={buttonStyle}
      >
        {

          editIndex !==null
          ?
          "Update Student"
          :
          "Add Student"
        }
      </button>
      <h2>
        Student List
      </h2>
      <table
      border="1"
      cellPadding="10"
      style={{
        width:"100%",
        borderCollapse:
        "collapse"
      }}
      >
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>DEPARTMENT</th>
            <th>AGE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map(
            (student, index) => (
              <tr key={index}>
                <td>
                  {student.name}
                </td>
                <td>
                  {student.email}
                </td>
                <td>
                  {student.department}
                </td>
                <td>
                  {student.age}
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{
                      marginLeft: "10px"
                    }}
                  >
                    Dlete

                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}