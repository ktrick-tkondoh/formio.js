export default {
    label: 'Data Grid',
    reorder: false,
    addAnotherPosition: 'bottom',
    layoutFixed: false,
    enableRowGroups: false,
    initEmpty: false,
    tableView: false,
    defaultValue: [
      {}
    ],
    key: 'dataGrid',
    type: 'datagrid',
    input: true,
    components: [
      {
        label: 'Submit',
        showValidations: false,
        dataGridLabel: false,
        tableView: false,
        key: 'submit',
        type: 'button',
        saveOnEnter: false,
        input: true
      },
      {
        label: 'Text Field',
        dataGridLabel: true,
        tableView: true,
        key: 'textField',
        type: 'textfield',
        input: true
      }
    ]
};
