import React from 'react';
import './MapOfMaltaZoom.scss';
import '../MapCommon.scss';
import { IMapProps } from '../MapOfParos/MapOfParos';
import home from '../../../images/home.png';
import food from '../../../images/food.png';
import fort from '../../../images/fort.png';
import church from '../../../images/cross.png';
import canon from '../../../images/canon.png';

const MapOfMaltaZoom : React.FC<IMapProps> = props => {
    return (
        <div className={`map map-of-malta-zoom`}>
            <svg viewBox="0 0 681.5969 964.18408" >

                <defs id="defs5455">
                    <pattern patternUnits="userSpaceOnUse" width="10" height="10"
                        patternTransform="translate(0,0) scale(10,10)" id="Polkadots-small" >
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="2.567" cy="0.810" r="0.05" id="circle8460" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}}cx="3.048" cy="2.33" r="0.05" id="circle8462" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="4.418" cy="2.415" r="0.05" id="circle8464" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="1.844" cy="3.029" r="0.05" id="circle8466" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="6.08" cy="1.363" r="0.05" id="circle8468" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="5.819" cy="4.413" r="0.05" id="circle8470" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="4.305" cy="4.048" r="0.05" id="circle8472" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="5.541" cy="3.045" r="0.05" id="circle8474" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="4.785" cy="5.527" r="0.05" id="circle8476" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="2.667" cy="5.184" r="0.05" id="circle8478" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="7.965" cy="1.448" r="0.05" id="circle8480" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="7.047" cy="5.049" r="0.05" id="circle8482" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="4.340" cy="0.895" r="0.05" id="circle8484" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="7.125" cy="0.340" r="0.05" id="circle8486" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="9.553" cy="1.049" r="0.05" id="circle8488" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="7.006" cy="2.689" r="0.05" id="circle8490" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="8.909" cy="2.689" r="0.05" id="circle8492" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="9.315" cy="4.407" r="0.05" id="circle8494" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="7.820" cy="3.870" r="0.05" id="circle8496" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="8.270" cy="5.948" r="0.05" id="circle8498" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="7.973" cy="7.428" r="0.05" id="circle8500" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="9.342" cy="8.072" r="0.05" id="circle8502" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="8.206" cy="9.315" r="0.05" id="circle8504" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="9.682" cy="9.475" r="0.05" id="circle8506" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="9.688" cy="6.186" r="0.05" id="circle8508" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="3.379" cy="6.296" r="0.05" id="circle8510" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="2.871" cy="8.204" r="0.05" id="circle8512" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="4.59" cy="8.719" r="0.05" id="circle8514" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="3.181" cy="9.671" r="0.05" id="circle8516" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="5.734" cy="7.315" r="0.05" id="circle8518" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="6.707" cy="6.513" r="0.05" id="circle8520" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="5.730" cy="9.670" r="0.05" id="circle8522" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="6.535" cy="8.373" r="0.05" id="circle8524" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="4.37" cy="7.154" r="0.05" id="circle8526" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="0.622" cy="7.25" r="0.05" id="circle8528" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="0.831" cy="5.679" r="0.05" id="circle8530" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="1.257" cy="8.519" r="0.05" id="circle8532" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="1.989" cy="6.877" r="0.05" id="circle8534" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="0.374" cy="3.181" r="0.05" id="circle8536" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="1.166" cy="1.664" r="0.05" id="circle8538" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="1.151" cy="0.093" r="0.05" id="circle8540" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="1.151" cy="10.093" r="0.05" id="circle8542" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="1.302" cy="4.451" r="0.05" id="circle8544" />
                        <circle style={{fill: "var(--fg)", stroke: "none"}} cx="3.047" cy="3.763" r="0.05" id="circle8546" />
                    </pattern>
                </defs>

                <g transform="translate(-889.05225,-146.76369)">
                    <path id="outline" style={{fill : "url(#Polkadots-small)"}}
                    d="m 975.17413,157.6039 20.40408,-5.62871 1.40717,5.62871 19.70052,18.29331 5.6287,8.44307 -4.2216,11.25742 -16.1825,9.14665 -21.10766,4.92512 -13.36819,3.51795 -19.70049,8.44306 0.70359,7.73948 10.55384,7.03589 11.25742,-0.70359 6.3323,-8.44307 30.25429,-7.73947 16.8862,10.55383 14.7753,-3.51794 1.4072,-11.96101 h 16.8861 l 0.7036,11.96101 -6.3323,-0.70359 v 7.73947 l -18.9969,25.3292 -11.2574,2.11077 2.1108,7.73948 11.2574,0.70358 11.961,0.70359 7.0359,2.81436 6.3323,19.70049 -6.3323,11.96101 -2.1108,-13.36819 -6.3323,1.40718 -2.8143,14.77536 -13.3682,2.81436 -6.3323,-7.73948 -8.4431,9.85024 4.9251,6.3323 19.7005,-1.40717 8.4431,7.73947 4.9251,-4.22153 -5.6287,-8.44307 2.8144,-6.3323 6.3323,13.36819 -0.7036,12.6646 -8.4431,14.77537 -19.7005,-0.70359 -6.3323,4.22153 -4.9251,-6.3323 -18.29332,-9.14665 -9.85024,4.92512 -5.62871,7.73948 9.14665,-1.40718 9.85022,2.81435 19.7005,18.29331 11.961,11.96101 4.2216,14.07178 -3.518,14.07178 -2.8143,9.14665 7.0358,9.85025 h 4.2216 l 7.0359,-15.47896 9.8502,-2.81435 9.8503,4.92512 18.2933,-0.70359 1.4071,-37.9938 9.1467,-13.36819 11.961,-6.3323 7.7395,9.85025 8.4431,7.73948 18.9968,7.73947 29.5508,7.73948 8.443,4.92512 1.4072,10.55383 29.5508,7.03589 2.1107,10.55383 12.6646,4.92513 1.4072,15.47895 -11.961,-2.81435 v 32.36508 l 12.6646,7.03589 28.1435,-0.70359 9.8503,26.03279 2.8143,2.11077 -1.4071,12.66459 8.443,12.6646 42.2154,11.96101 3.5179,16.88614 -4.9251,11.25742 -35.1795,9.85024 -28.8471,-19.70049 -14.0718,-0.70359 -36.5866,-25.32919 -11.961,-10.55384 -23.2184,-0.70358 -64.0266,22.51484 -38.6974,45.73327 5.6287,2.81436 18.2933,-1.40718 4.2215,-7.03589 11.9611,-7.03589 20.404,-3.51794 11.2575,6.3323 59.1014,-2.11077 14.0718,8.44307 16.1825,17.58972 -21.1076,16.88613 -7.0359,17.58972 -10.5539,7.03589 -27.4399,0.70359 -34.4759,-22.51484 -23.922,-9.85025 -23.922,0.70359 -11.961,-14.07178 3.5179,-5.62871 -6.3323,-1.40717 -4.2215,10.55383 v 13.36819 l 7.7395,21.10766 18.2933,13.36819 26.0328,4.22153 16.1825,22.51485 -7.7395,37.99379 -16.8861,-6.3323 -47.1405,-3.51794 -38.6973,15.47895 -30.25436,11.25743 3.51794,8.44306 5.62871,9.85025 35.88301,-16.88614 h 7.7395 l 18.2933,-11.25742 h 21.1077 l 7.0359,5.62871 -7.0359,50.6584 4.2215,6.3323 8.4431,-15.47896 5.6287,-9.85024 4.2215,2.11077 25.3292,-9.14666 11.2574,-14.77536 2.8144,-12.6646 31.6615,-14.77537 7.0359,-7.73948 -5.6287,-5.62871 15.4789,-6.3323 7.7395,-11.25742 19.7005,-5.62871 15.4789,-17.58972 16.1826,6.3323 9.1466,-2.81436 v -7.73947 l 28.8472,-23.21843 23.922,-5.62871 9.1467,13.36818 11.961,4.22154 11.961,-7.73948 4.2215,-12.6646 9.8503,-12.6646 27.4399,-1.40718 15.479,10.55384 48.5476,-4.22154 v 3.51795 l -47.844,3.51794 -5.6287,8.44307 h -6.3323 l 1.4071,9.85024 -8.443,7.03589 -2.1108,4.22153 2.8144,12.6646 -4.2216,11.25742 -4.9251,4.92512 -4.2215,22.51485 2.1107,14.07177 -21.1076,4.92513 -18.2933,6.3323 -9.8503,7.73947 -11.961,13.36819 -4.9251,9.14666 1.4072,6.3323 -26.0328,16.88613 -20.4041,15.47895 -6.3323,18.29331 -2.8144,7.73948 -27.4399,37.29021 -2.1108,-3.51795 26.0328,-35.88303 -19.7005,15.47896 -16.1825,34.47585 -14.7754,3.51794 -53.4728,50.6584 -9.1466,-8.44307 -12.6646,6.3323 -0.7036,4.92513 -32.3651,-6.3323 -2.8143,14.77536 17.5897,8.44307 10.5538,-3.51795 25.3292,44.3261 -0.7036,10.55383 h -7.7394 l -21.8113,-13.36819 -11.2574,0.70359 -23.922,13.36819 -11.2575,11.96103 11.2575,10.5538 v 4.9251 l 8.443,-2.1107 11.2574,-17.5898 33.0687,18.2934 -28.1435,54.1763 9.8502,4.9251 23.922,-50.6584 35.1795,-9.1466 -7.7395,-30.25435 2.1108,-1.40718 -4.9252,-24.62561 16.8862,-15.47895 10.5538,5.62871 19.7005,-24.62561 -2.1108,-13.36819 8.4431,-4.92512 9.8502,12.6646 57.6943,-28.84714 8.4431,5.62871 14.0718,-5.62871 32.365,59.10146 -6.3323,62.61938 4.9252,4.9251 6.3323,-33.06863 3.5179,-0.70359 5.6287,40.10452 7.0359,-4.2215 -5.6287,-37.29019 12.6646,-9.14666 0.7036,-20.40408 -8.4431,-23.21843 5.6287,-5.62871 -15.4789,-10.55383 -6.3323,-18.29331 7.0359,-0.70359 -33.0687,-49.95481 1.4072,-3.51794 -5.6287,-21.81125 5.6287,-3.51795 34.4758,16.88613 12.6646,15.47896 13.3682,26.73637 10.5538,13.36819 10.5539,13.36819 -2.8144,21.10766 -0.7036,14.07178 -0.7036,40.10456 4.9252,-4.92512 7.7394,-22.51484 -3.5179,-16.18254 10.5538,-26.03279 -26.7363,-84.43066 4.9251,-7.03589 -5.6287,-2.81435 -4.2216,7.03588 -14.0717,-10.55383 -16.8862,-17.58972 v -6.3323 l 11.961,-6.3323 21.1077,9.14666 -0.7036,8.44306 6.3323,4.92512 2.1108,7.73948 9.1466,8.44307 9.1467,11.25742 8.4431,8.44307 16.1825,8.44306 16.8861,2.81436 14.7754,1.40717 11.2574,15.47896 2.1108,6.3323 13.3682,-20.40408 -14.7754,-7.73948 -9.8502,-14.77536 -5.6288,-2.81436 -12.6645,-12.6646 -3.518,-14.07177 -11.961,-4.92512 -0.7036,-9.85025 11.961,-5.62871 8.4431,-15.47895 10.5538,-2.81436 1.4133,2.50052 7.7334,13.68203 7.0359,-2.81436 12.6646,7.03589 9.1466,-12.6646 -10.5538,-10.55383 -2.1108,-9.14666 -9.8502,-2.81435 -2.8144,-9.14666 0.7036,-7.03589 -7.0359,-1.40717 4.9251,-7.03589 -11.2574,-4.92512 -5.6287,-11.96102 -16.1825,-9.85024 3.5179,-11.96101 18.9969,-0.70359 16.8861,8.44307 7.7395,1.40718 9.1467,8.44306 -0.7036,9.14666 11.2574,-10.55384 9.8502,-0.70358 -1.4071,7.73947 16.8861,-2.11076 10.5538,7.73947 -3.5179,10.55384 17.5897,0.70358 v 8.44307 l 13.8958,-6.5082 -0.085,-584.2928 -605.89472,0.12415 z" />
                </g>

                <g transform="translate(-889.05225,-146.76369)" >
                    <text className={`location-name small`} x="1146.3998" y="467.43051" >
                        <tspan x="1146.3998" y="467.43051" className={`center`} >Cozy</tspan>
                        <tspan x="1146.3998" y="484.43051" className={`center`} >Rooms</tspan>
                    </text>
                    <image
                        width="34.328358"
                        height="34.328358"
                        preserveAspectRatio="none"
                        href={home}
                        id="image6179"
                        x="1127.1459"
                        y="485.6933" />
                </g>

                <g transform="translate(-889.05225,-146.76369)">
                    <text className={`location-name small`} x="1097.3218" y="427.20731" >
                        <tspan x="1097.3218" y="427.20731">Airbnb</tspan>
                    </text>
                    <image
                    width="34.328358"
                    height="34.328358"
                    preserveAspectRatio="none"
                    href={home}
                    id="image6179-0"
                    x="1105.7214"
                    y="380.82587" />
                </g>

                <g transform="translate(-889.05225,-146.76369)">
                    <image
                    width="32.815914"
                    height="32.815914"
                    preserveAspectRatio="none"
                    href={food}
                    id="image6275"
                    x="1035.3115"
                    y="391.55893" />
                    <text className={`location-name x-small`} x="1053.5349" y="378.10947" >
                        <tspan className={`center`} x="1053.5349" y="378.10947" >Piccolo</tspan>
                        <tspan className={`center`} x="1053.5349" y="393.10947" >Padre</tspan>
                    </text>
                </g>

                <g transform="translate(-889.05225,-146.76369)">
                    <image
                    width="32.815914"
                    height="32.815914"
                    preserveAspectRatio="none"
                    href={food}
                    id="image6275-5"
                    x="1176.2711"
                    y="444.05301" />
                    <text className={`location-name x-small`} x="1194.1427" y="431.30716" >
                        <tspan className={`center`} x="1194.1427" y="431.30716" >Hole in</tspan>
                        <tspan className={`center`} x="1194.1427" y="446.30716" >the wall</tspan>
                    </text>
                </g>

                <g transform="translate(-889.05225,-146.76369)">
                    <image
                    width="32.815914"
                    height="32.815914"
                    preserveAspectRatio="none"
                    href={food}
                    id="image6275-0"
                    x="1085.4427"
                    y="474.25558" />
                    <text className={`location-name x-small`} x="1105.1587" y="513.54242" >
                        <tspan x="1105.1587" y="513.54242" className={`center`} >Sea Salt</tspan>
                        </text>
                </g>

                <g transform="translate(-889.05225,-146.76369)">
                    <image
                    width="32.815914"
                    height="32.815914"
                    preserveAspectRatio="none"
                    href={food}
                    id="image6275-7"
                    x="967.86237"
                    y="261.69635" />
                    <text className={`location-name x-small`} x="986.00598" y="261.42502" >
                        <tspan x="986.00598" y="261.42502" className={`center`} >The Avenue</tspan>
                    </text>
                </g>

                <g transform="translate(-889.05225,-146.76369)">
                    <circle r="7.0742612" cy="424.87561" cx="1036.8159" />
                    <text className={`location-name small`} x="999.00494" y="449.25372" >
                        <tspan x="999.00494" y="449.25372">Balluta Bay</tspan>
                    </text>
                </g>

                <g transform="translate(-889.05225,-146.76369)">
                    <text className={`location-name small`} x="925.35327" y="314.42786" >
                        <tspan x="925.35327" y="314.42786">St Julian's</tspan>
                    </text>
                </g>

                <g transform="translate(-889.05225,-146.76369)">
                    <circle r="7.0742612" cy="541.9245" cx="1261.4817" />
                    <text className={`location-name small`} x="1271.9294" y="555.35736" >
                        <tspan x="1271.9294" y="555.35736">Tigne Point</tspan>
                    </text>
                </g>

                <g transform="translate(-889.05225,-146.76369)">
                    <text className={`location-name small`} x="1167.1453" y="602.27203" >
                        <tspan className={`center`} x="1167.1453" y="602.27203" >Manoel</tspan>
                        <tspan className={`center`} x="1167.1453" y="627.27203" >Island</tspan>
                    </text>
                </g>

                <g transform="translate(-889.05225,-146.76369)" >
                    <text className={`location-name small`} x="1350.7155" y="606.10291" >
                        <tspan x="1350.7155" y="606.10291">Fort St Elm</tspan>
                    </text>
                    <image
                    width="30.84576"
                    height="30.84576"
                    preserveAspectRatio="none"
                    href={fort}
                    id="image7376"
                    x="1357.9265"
                    y="610.71509" />
                </g>

                <g transform="translate(-889.05225,-146.76369)">
                    <circle r="7.0742612" cy="756.17834" cx="1285.6927" />
                    <text className={`location-name small`} x="1274.0192" y="762.17834" >
                        <tspan className={`end`} x="1274.0192" y="762.17834">Upper</tspan>
                        <tspan className={`end`} x="1274.0192" y="779.17834" >Barrakka Gardens</tspan>
                    </text>
                </g>

                <g transform="translate(-889.05225,-146.76369)" >
                    <text className={`location-name small`} x="1281.6328" y="696.31744" >
                        <tspan className={`end`} x="1281.6328" y="696.31744" >St John's</tspan>
                        <tspan className={`end`} x="1281.6328" y="713.31744" >Co-Cathedral</tspan>
                    </text>
                    <image
                    width="29.937054"
                    height="29.937054"
                    preserveAspectRatio="none"
                    href={church}
                    id="image7288"
                    x="1277.2443"
                    y="685.33313" />
                </g>

                <g transform="translate(-889.05225,-146.76369)">
                    <image
                    width="45.910442"
                    height="45.910442"
                    preserveAspectRatio="none"
                    href={canon}
                    id="image6442"
                    x="1341.0804"
                    y="680.28271" />
                    <text className={`location-name small`} x="1375.6219" y="715.67163" >
                        <tspan x="1375.6219" y="715.67163">Lower </tspan>
                        <tspan x="1375.6219" y="732.67163" >Barrakka </tspan>
                        <tspan x="1375.6219" y="749.67163" >Gardens</tspan>
                    </text>
                </g>

                <g transform="translate(-889.05225,-146.76369)">
                    <circle r="7.0742612" cy="731.70221" cx="1244.6653" />
                    <text className={`location-name small`} x="1196.5364" y="736.17981" >
                        <tspan className={`center`} x="1196.5364" y="736.17981" >City Gate</tspan></text>
                </g>

                <g transform="translate(-889.05225,-146.76369)" >
                    <text className={`location-name small`} x="1272.9261" y="629.74561" >
                        <tspan className={`center`} x="1272.9261" y="629.74561" >St Paul's </tspan>
                        <tspan className={`center`} x="1272.9261" y="646.74561" >Cathedral</tspan>
                    </text>
                    <image
                    width="29.937054"
                    height="29.937054"
                    preserveAspectRatio="none"
                    href={church}
                    id="image7288-2"
                    x="1271.2443"
                    y="645.39606" />
                </g>

                <g transform="translate(-889.05225,-146.76369)">
                    <text className={`location-name small center`} x="1431.7708" y="871.64178" >
                        <tspan x="1431.7708" y="871.64178">Vittoriosa</tspan>
                        <tspan x="1431.7708" y="892.64178" >(Birgu)</tspan>
                    </text>
                    <text className={`location-name small center`} x="1363.6562" y="763.24652" >
                        <tspan x="1363.6562" y="763.24652">Fort</tspan>
                        <tspan x="1363.6562" y="780.24652" >St Angelo</tspan>
                    </text>
                    <image
                    width="30.84576"
                    height="30.84576"
                    preserveAspectRatio="none"
                    href={fort}
                    id="image7376-3"
                    x="1349.7488"
                    y="779.59949" />
                </g>

                <g transform="translate(-889.05225,-146.76369)">
                    <text className={`location-name small`} x="1473.6875" y="-597.97058" transform="rotate(55)">
                        <tspan x="1473.6875" y="-597.97058">Sengla</tspan>
                    </text>
                </g>
                <g transform="translate(-889.05225,-146.76369)">
                    <text className={`location-name small`} x="1378.1095" y="1000.995" >
                        <tspan x="1378.1095" y="1000.995">Cospicua</tspan>
                    </text>
                </g>

                <g transform="translate(-889.05225,-146.76369)" >
                    <rect id={`border`} width="680.59692" height="963.18408" x="889.55225" y="147.26369" />
                </g>
            </svg>
        </div>
    );
}

export default MapOfMaltaZoom;