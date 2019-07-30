import React, { createContext, useContext } from "react";
import styled from 'styled-components'
import * as N from 'react-native'

export const View = styled(N.View)(({ css }) => css);

// export const View = props => <View as={N.View} {...props} />;
export const Text = props => <View as={N.Text} {...props} />;
export const Image = props => <View as={N.Image} {...props} />
export const TextInput = props => <View as={N.TextInput} {...props} />
export const ScrollView = props => <View as={N.ScrollView} {...props} />
export const Picker = props => <View as={N.Picker} {...props} />
export const Slider = props => <View as={N.Slider} {...props} />
export const Switch = props => <View as={N.Switch} {...props} />
export const FlatList = props => <View as={N.FlatList} {...props} />
export const SectionList = props => <View as={N.SectionList} {...props} />
export const ActivityIndicator = props => <View as={N.ActivityIndicator} {...props} />
export const Alert = props => <View as={N.Alert} {...props} />
export const Modal = props => <View as={N.Modal} {...props} />
export const StatusBar = props => <View as={N.StatusBar} {...props} />

export const Button = ({ children, css = { color: "black" }, ...props }) => {
    const { color, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, fontStyle, textShadow, ...cssprops } = css;
    return (
        <View as={N.TouchableOpacity} {...props} css={{ ...cssprops }}>
            <View as={N.Text} css={{ color, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, fontStyle, textShadow }} >{children}</View>
        </View>
    )
}

//Context
const HooksContext = createContext();

export const ContextProvider = ({ children, value }) => {
    return <HooksContext.Provider value={value}>{children}</HooksContext.Provider>;
};

export const useValue = () => {
    const value = useContext(HooksContext);
    return value;
};