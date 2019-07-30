# css-js-components
 react-native styled by css prop
## Usage


```jsx

import { View, Button } from '@css-ui/native';

```
Then use css={{stylesObject}} 

```jsx
import React from "react";
import { Button, Text, View } from "@css-ui/native";

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


Created by css-ui