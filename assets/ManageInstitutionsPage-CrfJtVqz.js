import{j as e,L as r,s as a}from"./index-Do9N5Bdr.js";import{u as c}from"./useQuery-Bmia-r3M.js";/* empty css                    */const o=async()=>{const{data:n,error:i}=await a.from("institutions").select(`
      id, 
      name, 
      city, 
      country, 
      public_id,
      profiles (
        id,
        role
      )
    `);if(i)throw new Error(i.message);return n.map(s=>({...s,teacher_count:s.profiles.filter(t=>t.role==="teacher").length,student_count:s.profiles.filter(t=>t.role==="student").length}))},u=()=>{const{data:n,isLoading:i,error:s}=c({queryKey:["institutions_with_counts"],queryFn:o});return e.jsxs("div",{children:[e.jsx(r,{to:"/account/admin/teachers-institutions",className:"btn-secondary",style:{marginBottom:"2rem",display:"inline-block"},children:"← Back to Institutions & Teachers"}),e.jsxs("div",{className:"manage-header",children:[e.jsx("h1",{children:"Manage Institutions"}),e.jsx(r,{to:"new",className:"btn",children:"Create New Institution"})]}),i&&e.jsx("p",{children:"Loading institutions..."}),s&&e.jsx("p",{className:"error-message",children:s.message}),n&&e.jsx("div",{className:"manage-table-container",children:e.jsxs("table",{className:"manage-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Location"}),e.jsx("th",{children:"Teachers"}),e.jsx("th",{children:"Students"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:n.map(t=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("strong",{children:t.name}),e.jsx("small",{children:t.public_id})]}),e.jsxs("td",{children:[t.city,", ",t.country]}),e.jsx("td",{children:t.teacher_count}),e.jsx("td",{children:t.student_count}),e.jsx("td",{children:e.jsx(r,{to:`/account/admin/teachers-institutions/institutions/${t.id}`,className:"btn-secondary",children:"Details"})})]},t.id))})]})})]})};export{u as default};
