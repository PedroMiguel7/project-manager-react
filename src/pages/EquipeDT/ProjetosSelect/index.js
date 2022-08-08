import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

class ProjetosSelect extends React.Component {
    state = {
        selectValue: 1,
    };

    /*handleChange = (event) => {
        this.setState({selectValue: event.target.value});
        this.props.parentCallback(this.statusValue);
        //console.log(this.selectValue);
    };*/

    Status1 = () => {
        this.props.parentCallback(1);
        this.statusValue = 1;
    }

    Status2 = () => {
        this.props.parentCallback(2);
        this.statusValue = 2;
    }

    Status3 = () => {
        this.props.parentCallback(3);
        this.statusValue = 3;
    }

    /*onTrigger = () => {
        this.props.parentCallback(this.selectValue);
    };

    onTrigger2 = () => {
        this.props.getStatus(2);
    };*/

    render() {
        const {selectValue} = this.state;

        var statusValue;

        return (
            <>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        displayEmpty
                        value={statusValue}
                        onChange={this.handleChange}
                        defaultValue={3}
                    >
                        <MenuItem onClick={this.Status1} value={1}>Todos</MenuItem>
                        <MenuItem onClick={this.Status2} value={2}>Em Andamento</MenuItem>
                        <MenuItem onClick={this.Status3} value={3}>Concluídos</MenuItem>
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