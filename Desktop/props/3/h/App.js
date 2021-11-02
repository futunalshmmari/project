import React from "react";
import Youtube from "./Youtube";
import "../index.css"
function App(){

    return (
        <div>
            <Youtube
image="https://i.ytimg.com/vi/kYW3VddkBFo/maxresdefault.jpg"
title="Assala - Jeetni Maksour"
link="https://www.youtube.com/watch?v=UsnRGo4y5FQ"
views="40k"
time="6:50"
 />
            <Youtube
image="https://i.ytimg.com/vi/Ldnu_jihqWw/maxresdefault.jpg"
title="عبدالمجيد عبدالله "
link="https://youtu.be/Ldnu_jihqWw"
views="21k"
time="2:00"
 />
        <Youtube
image="https://i.ytimg.com/vi/bci_-78aB0s/hqdefault.jpg"
title="Mohammed Abdo ... Ma Tmaneitak"
link="https://youtu.be/bci_-78aB0s"
views="40k"
time="5:00"
 />
 <Youtube
image="https://i.ytimg.com/vi/QqiqISFT15w/maxresdefault.jpg"
title="Wael Kfoury - Kelna Mnenjar 2021"
link="https://youtu.be/Z_N1228e0jM"
views="30K"
time="9:00"
 />

</div>
    )
    }
export default App;