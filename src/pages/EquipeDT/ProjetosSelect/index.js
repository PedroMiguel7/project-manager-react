import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

class ProjetosSelect extends React.Component {
    state = {
        selectValue: 1,
    };

    handleChange = (event) => {
        this.setState({selectValue: event.target.value});
        //this.props.parentCallback(this.selectValue);
    };

    onTrigger = () => {
        this.props.parentCallback(this.selectValue);
    };

    onTrigger2 = () => {
        this.props.getStatus(2);
    };

    render() {
        const {selectValue} = this.state;

        return (
            <>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        displayEmpty
                        value={this.selectValue}
                        onChange={this.onTrigger}
                        defaultValue={1}
                    >
                        <MenuItem value={1}>Todos</MenuItem>
                        <MenuItem value={2}>Em Andamento</MenuItem>
                        <MenuItem value={3}>Concluídos</MenuItem>
                    </Select>
                </FormControl>
            </>
        )
    }

    /*const [status, setStatus] = React.useState(1);

    const handleChange = (event) => {
        setStatus(event.target.value);
    };*/

    /*return (
        <>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    displayEmpty
                    value={status}
                    onChange={handleChange}
                    defaultValue={1}
                >
                    <MenuItem value={1}>Todos</MenuItem>
                    <MenuItem value={2}>Em Andamento</MenuItem>
                    <MenuItem value={3}>Concluidos</MenuItem>
                </Select>
            </FormControl>
        </>
    )*/
}

export default ProjetosSelect;