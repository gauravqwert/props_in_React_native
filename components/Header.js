import * as React from "react";
import { Appbar } from "react-native-paper";

const Header = (props) => {
    const _handleMore = () => console.log("Show More");

    return(
        <Appbar.Header>
            <Appbar.Content title={props.name}/>
            <Appbar.Action icon='dots-vertical' onPress={_handleMore}/>
        </Appbar.Header>
    );
};


export default Header;