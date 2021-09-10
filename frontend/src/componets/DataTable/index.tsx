import Datatable from 'react-bs-datatable';

// Criar header com 6 campos
const header = [
  { title: '#', prop: 'id', sortable: true },
  { title: 'Nome', prop: 'realname', sortable: true },
  { title: 'Login', prop: 'login', sortable: true },
  { title: 'Ativo?', prop: 'active',sortable: true },
  { title: 'Ultimo Acesso', prop: 'lastaccess', sortable: true },
  { title: 'Opções', prop: 'options', sortable: true },
];

// Randomize os dados das colunas da tablea
var count = 0;

const body = Array.from(new Array(57), () => {
  const rd = (Math.random() * 10).toFixed(1);
  count++;

  if (parseFloat(rd) > 0.5) {
    
    return {
        
        id: `${count}`,
        realname: `Maria ${rd}`,
        login: `Maria-${rd}`,
        active: 'Ativo',
        lastaccess: "09/09/21",
        options:(<>                    
                    <a href={`view/${rd}`} className='btn btn-success btn-mini'> <i className='icon-eye-open'></i> Visualizar</a> 
                    <a href={`edit/${rd}`} className='btn btn-primary btn-mini'> <i className='icon-edit'></i> Editar</a> 
                    <a href={`del/${rd}`} className='btn btn-danger btn-mini' data-id={`${rd}`}> <i className='icon-remove'></i> Desativar</a>
                </>)
    };
  }
  
    return {
        id:  `${count}`,
        realname: `João ${rd}`,
        login: `João.${rd}`,
        active: 'Desativado',
        lastaccess: "09/09/21",
        options:(<>                    
            <a href={`view/${rd}`} className='btn btn-success btn-mini'> <i className='icon-eye-open'></i> Visualizar</a>       
            <a href={`reactive/${rd}`} className='btn btn-danger btn-mini' data-id={`${rd}`}> <i className='icon-remove'></i> Reativar</a>
        </>)
    };
   
});


function DataTable() {
    return <Datatable 
            tableHeaders={header} 
            tableBody={body}                                                        
            />;
  }

export default DataTable;