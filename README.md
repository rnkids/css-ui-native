# css-js-components
 react, react-native styled by css prop
## Usage


```jsx
//IMPORT
//react
import { Div, Button, Img, H1 } from 'css-js-components';
//react-native react-native-web 
import { View, Button } from 'css-js-components';

```
Then use css={{stylesObject}} 

```jsx
import React from "react";
import { Button, Text, View } from "css-js-components";
import * as N from 'react-native'

const App = () => {

    return (
        <View css={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Button css={{
                fontSize: 20,
                color: 'white',
                backgroundColor: "darkgreen",
                justifyContent: "center",
                textAlign: "center",
                width: 80,
                height: 80,
                border: "1px solid black",
                borderRadius: 50,
                position: "absolute",
                right: 50,
                bottom: 50,
            }}
                onPress={() => { console.log('PRESS') }}
            >PRESS</Button>
            
        </View>
    );
};


export default App;

```


Created by Le Quy Sang