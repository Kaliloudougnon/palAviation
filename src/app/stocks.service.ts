import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
 stockList:any;
  constructor() {
    this.stockList= [
      {
        "PN": "002A0016-31",
        "Description": "Elevator Assy - LH",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "002A0016-32",
        "Description": "Elevator and Tab Assy - RH",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "0123FA2",
        "Description": "FLOW SYSTEM CALIBRATOR SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "019-012-001",
        "Description": "XMTR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "024147-000",
        "Description": "BATTERY MAIN - M6",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "332220490",
        "Description": "WASHER",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "332220850",
        "Description": "WASHER",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "332220960",
        "Description": "SUPPORT",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "332220970",
        "Description": "TUBE",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "332221380",
        "Description": "INLET GUIDE VANE",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "332221390",
        "Description": "INLET GUIDE VANE",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "332222220",
        "Description": "INLET GUIDE VAN",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "332222410",
        "Description": "NUT",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "332227310",
        "Description": "SUPPORT ASSY",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "332227330",
        "Description": "CONTROL ROD ASSY",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "332260140",
        "Description": "RING",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "332267150",
        "Description": "SUPPORT",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "332267330",
        "Description": "BRACKET",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "332400270",
        "Description": "NUT",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "332400380",
        "Description": "SPACER",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "045-250-025",
        "Description": "BOOMSET",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "064-50000-2000",
        "Description": "VHF DATA RADIO",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "064-50002-0101",
        "Description": "8.33 VHF COMM, ARINC",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "066-01127-1101",
        "Description": "TRA 67A ATC TRANSPONDER, MODE 'S'",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "066-01127-1301",
        "Description": "TRANSPONDER",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "066-01127-1602",
        "Description": "TRANSPONDER MODE S",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "066-50008-0405",
        "Description": "TRANSCEIVER-WX RADAR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "066-50008-0406",
        "Description": "RADAR TRANSCEIVER RTA-4B",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "066-50014-0101",
        "Description": "RCVR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "066-50014-0101",
        "Description": "RCVR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "066-50029-1101",
        "Description": "MULTI-MODE RCVR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "071-50001-8102",
        "Description": "ANTENNA, TCAS DIRECTIONAL",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "080-20325-01",
        "Description": "TRANSFORMER, RECTIFIER 50 AMP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "080-20325-01",
        "Description": "TRANSFORMER, RECTIFIER 50 AMP",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "0871DP4",
        "Description": "DETECTOR, ICE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "088259-04644",
        "Description": "ACCUMULATOR POWER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1001002-2",
        "Description": "RADOME, ASSY",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "10-1004-2",
        "Description": "SIGN",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "10-1004-2",
        "Description": "SIGN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "10-1004-3",
        "Description": "SIGN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "101651-303",
        "Description": "Slide\/Raft RH\/LH FWD\/AFT B767",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "103642-3",
        "Description": "VALVE-PRESSURE RELIEF",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "10-60450-1",
        "Description": "RELAY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "106-1-1100-02",
        "Description": "ACTUATOR - APU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "10-621630-1",
        "Description": "EXCITER IGNITION (CL'A')",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "10-631045-3",
        "Description": "IGNITION EXCITER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "107492-6",
        "Description": "REGULATOR-BLEED AIR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "1091A0000-01",
        "Description": "INJECTOR WATER",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "109382-36-1",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1103070-120",
        "Description": "DECODER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1106-3AB",
        "Description": "OBSERVER SEAT - RH",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "1111A0000-01",
        "Description": "3\/2 SOLENOID VALVE",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "11197-5",
        "Description": "DETECTOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "112T4607-5",
        "Description": "DOOR ASSY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "113A1150-1",
        "Description": "FITTING ASSY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "113A1150-2",
        "Description": "FITTING",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "113A2610-2",
        "Description": "",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "113A4300-2",
        "Description": "SPOILER",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "113A4600-1",
        "Description": "Spoiler Assy NO 6",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "113A9104-1",
        "Description": "BEAM ASSY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "113A9365-4",
        "Description": "ACCESS COVER",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "113T1249-1",
        "Description": "ROD ASSY.",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "113T2276-1",
        "Description": "TRACK ASSY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "113T3144-11",
        "Description": "DOOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "113T3144-3",
        "Description": "FLAP FOOTBALL PANEL",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1140-0110-34",
        "Description": "STICK AY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1140-0183-6",
        "Description": "STICK AY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "114079017",
        "Description": "VALVE-SELECTOR,GEAR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "114087006",
        "Description": "VALVE BY PASS DOOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "114095004",
        "Description": "A320 LOCK STAY ACTUA",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "114122014",
        "Description": "ACTUATOR, DOOR, MLG",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "114A7531-201",
        "Description": "SLAT TRACK #3 OR #6 0\/B",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "114A7542-201",
        "Description": "TRACK ASSY, #4 OR #5 I\/B",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "114A7542-5",
        "Description": "TRACK AY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "114T0202-104",
        "Description": "DOOR ASSY-SLAT TRACK RH",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1150002-1",
        "Description": "SENSOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1150250-1",
        "Description": "SENSOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1150980-2",
        "Description": "SENSOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1151864-1",
        "Description": "CONTRLLR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1158000-21",
        "Description": "VALVE-REFUEL",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "115A2710-17",
        "Description": "PANEL ASSY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "115A2950-81",
        "Description": "TURNBUCKLE",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "116941-5",
        "Description": "HEATER",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1173T211",
        "Description": "SWITCH, OVERHEAT SENSOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "11-811538-1",
        "Description": "PRECOOLER EXCHANGER",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "121664-8",
        "Description": "ACTUATOR-BALLSCREW",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "121666-13",
        "Description": "ACTUATOR-BALLSCREW MASTER",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "125329B-4",
        "Description": "ADAPTER",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "125334D-2",
        "Description": "FUEL VALVE BODY ASSY - LH TANK",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1267-501",
        "Description": "LIGHT ASSY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1303153-101",
        "Description": "LCD MONITOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1303910-101",
        "Description": "MONITOR, RETRACTOR, LCD-10.4 INCH",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1303A0000-04",
        "Description": "FLOW CONTROL VALVE",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1318M50G03",
        "Description": "LINK-CONNECTING ACTUATION RING IGV",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "1319M17P02",
        "Description": "SEAL-ROTATING HPT REAR",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "1320A0000-02",
        "Description": "VALVE, TRIM AIR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1385M33G03",
        "Description": "ARM ASSY-VANE ACTUATION CPRSR STTR STG 1",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "13TX-0115-A",
        "Description": "SURFACE POSITION XMTR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "140-025-1",
        "Description": "TRANSDUCER",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "140-025-1",
        "Description": "TRANSDUCER",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "140-025-2",
        "Description": "TRANSDUCER ASSY, WHEEL SPEED",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "141A4800-2",
        "Description": "WINDSHIELD ASSY",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "141A5810-121",
        "Description": "PANEL ASSY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "142-147",
        "Description": "ANTISKID\/AUTOBRAKE CONTROL UNIT - HYTROL",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "14220-316",
        "Description": "RING, FLUSH",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "14330-085-2",
        "Description": "SPACER",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "14330-190",
        "Description": "FLUSH CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "14330-230",
        "Description": "ORBITAL FLUSH VALVE ASSY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "143D6354G2",
        "Description": "THRUST MODE SELECT PANEL",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "14400-316",
        "Description": "RING ASSY, FLUSH",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "14400-323",
        "Description": "ELBOW ASSEMBLY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "14400-323-1",
        "Description": "ELBOW ASSY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "144-183-000-021",
        "Description": "SENSOR-VIBRATION BEARING NO.1",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "146A6110-28",
        "Description": "DOOR ASSY-AFT CARGO",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "148A7170-3",
        "Description": "ACCESS DOOR ASSY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1498M46P01",
        "Description": "RING-RETAINER HPT REAR",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "14R02-8C",
        "Description": "RING",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "152305-1",
        "Description": "ACTUATOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1523M37P02",
        "Description": "SHIELD-BOLT HPT NOZ SPRT",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "1523M71G07",
        "Description": "SHIELD-HEAT HPT STATOR FWD",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "1544100-7",
        "Description": "FLAPERON POWER CONTROL UNIT",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "1544300-3",
        "Description": "PCU",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1552-002-19",
        "Description": "PRESSURE REGULATOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1559A9900-01",
        "Description": "HP MANIFOLD",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1567A0000-01",
        "Description": "SELECTOR VALVE",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "15800-019-1",
        "Description": "VACUUM TOILET ASSY",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "15800-019-2",
        "Description": "TOILET ASSY",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "15800-029-3",
        "Description": "TOILET ASSY",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "15800-029-4",
        "Description": "TOILET ASSY",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "15800-176",
        "Description": "ELBOW, BOWL",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "15800-202",
        "Description": "HOUSING",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "15800-203",
        "Description": "END CAP",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "15800-206",
        "Description": "HANDLE-PUSH PULL",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "15800-217",
        "Description": "PLATE",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "15800-331",
        "Description": "Flush Ring",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "15800-352",
        "Description": "BRACKET, HOUSING SUPPORT",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "15800-359-4",
        "Description": "SPRING",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "15800-359-7",
        "Description": "SPRING",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "15801-040",
        "Description": "FLUSH CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "15801-202",
        "Description": "HOUSING, ASSEMBLY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "158300-101",
        "Description": "ACTUATOR-AILERON AUT",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "160550-1",
        "Description": "OIL TEMP. CONTROL VALVE",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "161A1100-14",
        "Description": "RH Main Landing Gear",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "161A1100-19",
        "Description": "LH Main Landing Gear",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "161T1145-4",
        "Description": "BOGIE PIVOT PIN",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "161T2032-1",
        "Description": "LOCK SPINDLE",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "161T6021-1",
        "Description": "UPPER DRAG STRUT NUT",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "162700-100",
        "Description": "Elevator Fuel Computer",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "162A1100-5",
        "Description": "NOSE LANDING GEAR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "162A3105-1",
        "Description": "PUSHROD ASSY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "162BL902",
        "Description": "CABIN TEMP IND.",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "162BL903",
        "Description": "INDICATOR-DUCT\/CABIN TEMP",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "162T1138-1",
        "Description": "CYLDR ASSY",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "162T1408-3",
        "Description": "PIN",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "162T2007-1",
        "Description": "PIN",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "162T3027-1",
        "Description": "ARM ASSY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "162T3029-1",
        "Description": "CRANK ASSY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "162T5004-1",
        "Description": "PIN-NOSE LDG FWD SPRT BEAM",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "162T5005-2",
        "Description": "PIN-NOSE LDG AFT SPRT BEAM",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "162T5006-1",
        "Description": "PIN-NOSE LDG GR SPRT LINK",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "165W01020",
        "Description": "PUMP, HYDRAULIC, MOTOR DRIVEN",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "16800-01-00",
        "Description": "SEAT, 3RD",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "169924",
        "Description": "CLAMP",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "169966",
        "Description": "CLAMP",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "171497-05-01",
        "Description": "FLIGHT MANAGEMENT COMPUTER",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1721F4",
        "Description": "CONTINUOUS LEVEL SENSOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "173A0103-8",
        "Description": "RUDDER ASSY",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "1742F9",
        "Description": "LCM UNIT",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1784M36G01",
        "Description": "SUPPORT-SHROUD NOZZLE",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "179366-1",
        "Description": "PLUG-MAGNETIC",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1808M56G01",
        "Description": "SEAL-STATIONARY HPT INR STATOR",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "181893-2",
        "Description": "INDICATOR, WATER SEPERATOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "18-2141-3",
        "Description": "TRANSMITTER, HYDRAULIC PRESSURE",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1827T100-7",
        "Description": "ACTUATOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "183010-4",
        "Description": "WATER SEPARATOR",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "183010-4",
        "Description": "WATER SEPARATOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1834M59G02",
        "Description": "ARM ASSY-VANE ACTUATION CPRSR STTR IGV",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "183A8100-5",
        "Description": "LH ELEVATOR TAB",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "1-899-29",
        "Description": "PROXIMITY SENSOR",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1905A0000-01",
        "Description": "SAFETY VALVE, L\/G",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1\/1\/1907",
        "Description": "BALLAST",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "194274-4",
        "Description": "HEAT EXCHANGER(REHEATER)",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "194276-5",
        "Description": "CONDENSER",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "1B1000-1GS",
        "Description": "STATIC INVERTER",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1G390",
        "Description": "SWITCH ASSY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "1U1065-2",
        "Description": "COMPENSATOR ASSY-CARTRIDGE",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "2002M15P01",
        "Description": "RETAINER-BLADE HPT RTR REAR",
        "Condition": "OH",
        "Quantity": 3
      },
      {
        "PN": "2010A04H04-24",
        "Description": "KEY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "2013-1A",
        "Description": "BATTERY ASSEMBLY",
        "Condition": "SV",
        "Quantity": 3
      },
      {
        "PN": "20202-01",
        "Description": "FUEL COMPENSATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2022432-4",
        "Description": "ACTUATOR, RAM AIR DOOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2022494-2",
        "Description": "ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2022522-2",
        "Description": "ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2041220-0424",
        "Description": "CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2041223-0414",
        "Description": "WXR CONTROL PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2041231-3622",
        "Description": "VOR\/MARK. RECEIVER,RVA36A",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2041444-0404",
        "Description": "ANTENNA DRIVE UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2041446-0401",
        "Description": "PLANAR ARRAY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2041683-7507",
        "Description": "ADF ANTENNA",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2045081-1",
        "Description": "STUD",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "2056B0000-01",
        "Description": "PLENUM",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2056B0000-01",
        "Description": "PLENUM",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2056C0000-01",
        "Description": "CHAMBER-AIR PLENUM",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2061-15-1",
        "Description": "INDICATOR - FLAP POSITION",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2067631-5332",
        "Description": "ALTIMETER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2070499-0101",
        "Description": "INDICATOR, IND MOUNT TRAY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "20791-02AB",
        "Description": "CABIN PRESSURE CONTROLLER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2080M35G04",
        "Description": "NOZZLE-HPT STATOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2086M14G02",
        "Description": "NOZZLE-HPT STATOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2117388-6",
        "Description": "CABIN PRESSURE CONTROLLER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2118966-221",
        "Description": "APU ECU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2118966-222",
        "Description": "APU ECU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "211C223-175",
        "Description": "SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "211C223-297",
        "Description": "SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "211C223-518",
        "Description": "PRESSURE SWITCH",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "211C223-527",
        "Description": "PRESSURE SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2123M56P01",
        "Description": "ELECTRONIC   CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "212A1212-3",
        "Description": "DUCT ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "212A2621-7",
        "Description": "DUCT ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "212A2811-2",
        "Description": "DUCT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "212T3008-12",
        "Description": "FIRE BLANKET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "213A1201-15",
        "Description": "A\/C BAY DUCT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "213T1003-17",
        "Description": "TUBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "213T3111-2",
        "Description": "DUCT ASSY.",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "214C50-2",
        "Description": "CABIN ALTITUDE WARNING SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "214T2477-3",
        "Description": "DUCT ASSY.",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "21520-1",
        "Description": "RECIRCULATING FAN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "21520-1",
        "Description": "RECIRCULATING FAN",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2156-604A",
        "Description": "SMOKE DETECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2156-756",
        "Description": "DETECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2-1740-1",
        "Description": "BRAKE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "21C1-3-22",
        "Description": "PRESSURE SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "21SN04-23F",
        "Description": "SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2204018-1",
        "Description": "MOUNT BRACKET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2204074-1",
        "Description": "PLATE AY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2204087-1",
        "Description": "ROD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2204088-1",
        "Description": "SEAL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2204118-3",
        "Description": "SHIM",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2206400-2",
        "Description": "AIR CYCLE MACHINE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2215627-2",
        "Description": "DIFFUSER",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2215629-1",
        "Description": "PLENUM ASSY",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2215632-1",
        "Description": "PLENUM",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2215632-2",
        "Description": "PLENUM ASSY",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2227000-61C1",
        "Description": "DFDAU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2233000-816-1",
        "Description": "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2234320-01-01",
        "Description": "FDIMU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "22715-000-02",
        "Description": "NLG DOOR ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2293B020000",
        "Description": "VALVE-CHECK",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2313M-347-4",
        "Description": "WINDSHEILD WIPER MOTOR CONVERTER L\/H",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "233A3202-5",
        "Description": "FUEL CONTROL PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "233A3203-1",
        "Description": "ENGINE CONTROL MODULE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "233A3204-1",
        "Description": "MODULE APU CONTROL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "233A3206-2",
        "Description": "PANEL DISPLAY SELECT INSTR - P5-28",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "233A3207-4",
        "Description": "MOD-DOOR WARNING ANNUNCIATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "233N3201-11",
        "Description": "PANEL AY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "233T3239-8",
        "Description": "PANEL AY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "233T3242-1301",
        "Description": "EEC CONT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "233T7210-6",
        "Description": "PANEL AY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "233W6201-5",
        "Description": "MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "233W6203-5",
        "Description": "MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "234-511-9059",
        "Description": "COUPLING CLP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "234-517-9005",
        "Description": "COUPLING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "241-246-022-004",
        "Description": "MONITOR ENGINE VIBRATION",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "241-251-000-121",
        "Description": "UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "241-280-051-012",
        "Description": "CONDITIONER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "241-280-056-014",
        "Description": "AVM",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2-418-05",
        "Description": "TRANSFORMER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "24E507040G01",
        "Description": "HEATER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "251A1240-3",
        "Description": "POWER CONT.- SPOILER AILERON CONTROL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "251A1240-5",
        "Description": "ACTUATOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "251A2420-5",
        "Description": "VALVE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "251A2420-7",
        "Description": "CONTROL VALVE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "251A2430-25",
        "Description": "TAB MECH ASSY-ELEVATORCONTROLS LH",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "251A2430-26",
        "Description": "TAB MECH ASSY-ELEVATORCONTROLS RH",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "251A4510-14",
        "Description": "ACTUATOR, STAB TRIM",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "251T0100-311",
        "Description": "SHAFT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "251T0100-323",
        "Description": "ROD ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "251T0100-353",
        "Description": "ROD ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "252CA01C1-02Y1",
        "Description": "CONTACTOR THREE POLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "252T2171-1",
        "Description": "TRUNNION",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "25498",
        "Description": "GUIDE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "256T3210-4",
        "Description": "ACTUATOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "256T3250-4",
        "Description": "TRAILING EDGE FLAP ROTARY ACTUATOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "26007",
        "Description": "POTENTIOMETER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2607825-2",
        "Description": "WHEEL ASSY",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2613128-1",
        "Description": "WHEEL HALF ASSEMBLY      OUTBOARD(SERVIC",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2615001-1",
        "Description": "WHEEL",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2624-82",
        "Description": "ELT ANTENNA",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "263BC101-3",
        "Description": "BATTERY CHARGER 777",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "26600",
        "Description": "Guide",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "273A1401-2",
        "Description": "NLG LOCK MANIFOLD ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "273A3610-4",
        "Description": "DAMPER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2-7462-3",
        "Description": "VALVE-AUTO BRAKE SHUTTLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "27550-1",
        "Description": "OXYGEN SHUTOFF VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2-7680-1",
        "Description": "FUSE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2-7680-2",
        "Description": "HYDRAULIC FUSE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2-7681-2",
        "Description": "HYDRAULIC FUSE, NLG EXTEND",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2780536-101",
        "Description": "VALVE HEAT CARGO",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2-7892-2",
        "Description": "CARGO DOOR SNUBBER",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2790583-104",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2-8020-1",
        "Description": "FUSE HYDRAULIC T\/R PRESS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2-8020-27",
        "Description": "FUSE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2-8020-28",
        "Description": "FUSE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2-8020-5",
        "Description": "HYDRAULIC FUSE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2-8041-1",
        "Description": "HYDRAULIC FUSE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "282900-1013",
        "Description": "ACTUATOR ASSY RUDDER",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "283200-1007",
        "Description": "POWER CONTROL ACTUATOR, O\/B AILERON",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "284A6809-28",
        "Description": "SPUD",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "284A6829-7",
        "Description": "SHROUD CLEAR COVER",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "284A6830-12",
        "Description": "SHROUD ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "284T0052-3",
        "Description": "RADOME 767",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "284T0736-8",
        "Description": "FEEDLINE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285A1200-2",
        "Description": "FSEU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285A1300-1",
        "Description": "ENGINE ACCESSORY UNIT MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285A1600-6",
        "Description": "PSEU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285A1840-8",
        "Description": "MODULE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285N0028-21",
        "Description": "CARD-FIRE DETECTION",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285N0412-3",
        "Description": "HANDSET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285N0412-4",
        "Description": "HANDSET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285T0012-110",
        "Description": "UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285T0017-103",
        "Description": "MODULE POWER SUPPLY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285T0017-104",
        "Description": "MODULE, POWER SUPPLY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285T0022-36",
        "Description": "PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285T0032-15",
        "Description": "PC AY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285T0034-28",
        "Description": "PRINTED CIRCUIT ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285T0259-19",
        "Description": "PCA",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285T0458-11",
        "Description": "PC ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285T0852-1",
        "Description": "FDAS KEYPAD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285T0855-1",
        "Description": "FLIGHT DECK DOOR ACCESS CONTROL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285T0855-5",
        "Description": "MODULE, FDAS CONTROLLER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285W0015-102",
        "Description": "GENERATOR CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285W0026-2",
        "Description": "PASSENGER ADDRESS MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285W0027-101",
        "Description": "ZONE MANAGEMENT UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285W0038-101",
        "Description": "UNIT, POWER SUPPLY, PREREGULATOR, 777-200",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285W0114-2",
        "Description": "RTP",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "287A6115-5",
        "Description": "BRACKET ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "28823-7",
        "Description": "COMPRESSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "28B545-9",
        "Description": "GENERATOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2920033-103",
        "Description": "VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "293W3172-3",
        "Description": "ACTUATOR ASSY-D\/LOCK",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "293W3922-3",
        "Description": "ACTUATOR ASSY, MLG DOOR UPLOCK",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "295W1701-1",
        "Description": "STEERING ACTUATOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2960035-101",
        "Description": "VALVE, MOT OPR, 2 WAY",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "2960036-101",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2980190000000",
        "Description": "FAUCET - WATER",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "29840",
        "Description": "ADHESIVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2LA005308-05",
        "Description": "WING STROBE LIGHT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2LA455010-00",
        "Description": "ANTI COLLISION LIGHT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3000-46-24",
        "Description": "SWITCH_CMM 21-43-01",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "30042-0000-0402",
        "Description": "FUEL LEVEL SENSING UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "30042-0000-0501",
        "Description": "CONTROL UNIT-LEVEL,SENSIN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "30100022-33",
        "Description": "EXTINGUISHER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "301-298-211-0",
        "Description": "REAR ROTATING LABYRINTH",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "30136-0106",
        "Description": "WATER TANK QTY.TRANSMITTER",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "30136-0108",
        "Description": "XMTR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "301-475-207-6",
        "Description": "BAFFLE-OIL BRG 1",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "301-544-407-0",
        "Description": "TUBE ASSY-OIL NO.2 BRG",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "30-1685-2",
        "Description": "ANTI COLLISION LIGHT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "30-1883-5",
        "Description": "FLOODLIGHT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "30230",
        "Description": "ANTISKID ACCU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "30-2506-3",
        "Description": "LIGHT AY STROBE ANTICOL BTM",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "30-2581-3",
        "Description": "HALOGEN LOGO LIGHT - POST M330-33-2001",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "304486-12",
        "Description": "ELECTRONIC CONTROL BOX",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "305-136-803-0",
        "Description": "SHAFT ASSY-RADIAL DRIVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "305RAA1",
        "Description": "AUTOTHROTTLE SERVOMOTOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3100013",
        "Description": "SENSORS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "31073-110",
        "Description": "AILERON SERVO CONTROL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "311A2090-1",
        "Description": "PIN FUSE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "311A2091-1",
        "Description": "PIN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "311A2095-1",
        "Description": "END CAP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "311A2095-2",
        "Description": "CAP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "311A2095-4",
        "Description": "END CAP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "314-2200-11",
        "Description": "FAN COWL RH",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "314-2200-3",
        "Description": "FAN COWL LH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "315A1811-1",
        "Description": "NUT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "315A2800-2",
        "Description": "T\/R ACTUATOR ASSY",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "315A2801-5",
        "Description": "ACTUATOR ASSY",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3199680",
        "Description": "BRAKE TEMP MONITOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "320522-17",
        "Description": "VALVE OUTLINE,SOLENOID",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "320548-1",
        "Description": "VALVE, SOLENOID",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "320548-2",
        "Description": "SOLENOID VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "320-549-005-0",
        "Description": "SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "321200M02",
        "Description": "BRAKE SPEED TRANSDUCER UNIT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "321200M02",
        "Description": "BRAKE SPEED TRANSDUCER UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3213754-1",
        "Description": "VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3213754-1",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3214552-5",
        "Description": "VALVE, PRESS REG. & SHUT OFF",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "321464-5-1",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3214862-1",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": 32152,
        "Description": "RING RTNR",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "3215618-4",
        "Description": "VALVE-ANTI ICE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3217-200",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3218KGB01",
        "Description": "SENSOR-N2 SPEED",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "321942-1-1",
        "Description": "VALVE - 35 DEG FLOW CONTR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": 322000,
        "Description": "TRANSDUCER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3236761-5",
        "Description": "HOUSING ASSEMBLY, BALLSCREW",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "325-027-303-0",
        "Description": "HARNESS, MW0315",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "325-045-301-0",
        "Description": "HARNESS",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3250-80",
        "Description": "BALLAST UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "327155-3",
        "Description": "ANTI ICE VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3283086-32",
        "Description": "LOCK, BRAKE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3289562-5",
        "Description": "VALVE, PRECOOLER CONTROL",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3289562-6",
        "Description": "PRECOOLER CONTROL VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3290888-2",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3291184-2",
        "Description": "VALVE-AIR TRANSIENT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3291238-2",
        "Description": "VALVE, SURGE CONTROL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3291238-2",
        "Description": "VALVE, SURGE CONTROL",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3291432-1",
        "Description": "VALVE, APU LOAD CONTROL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "330TS08Y",
        "Description": "FIRE   PANEL-ENGINE APU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "331-0006-01",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "335-108-701-0",
        "Description": "SLIDE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "335-192-203-0",
        "Description": "VANE, BOOSTER ASSEMBLY, STAGE 2",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "saus-53",
        "Description": "INDICATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "336-009-801-0",
        "Description": "SEAL-ROTATING OIL NO.4 BRG",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "337-542-9210",
        "Description": "FILTER ELEMENT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "338-002-219-0",
        "Description": "BLADE-STG2 (WIDE)",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-002-319-0",
        "Description": "BLADE-STG3 (WIDE)",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-002-419-0",
        "Description": "BLADE-STG4 (WIDE)",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-002-543-0",
        "Description": "BLADE-STG5 (WIDE)",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-003-106-0",
        "Description": "VANE ASSY-FAN BSTR STG 1",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-003-306-0",
        "Description": "VANE ASSY-FAN BSTR STG3",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-003-404-0",
        "Description": "VANE, BOOSTER ASSEMBLY, STAGE 4",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-010-601-0",
        "Description": "SHAFT ASSY-FAN",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-062-701-0",
        "Description": "TUBE-OIL NO.1 BRG SCAV",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-068-111-0",
        "Description": "PANEL ASSY-ACOUSTICAL AFT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-068-411-0",
        "Description": "PANEL ASSY-ACOUSTICAL AFT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-078-804-0",
        "Description": "PANEL ASSY-ACOUSTICAL FWD",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-079-504-0",
        "Description": "PANEL ASSY-ACOUSTICAL FWD",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-108-503-0",
        "Description": "BLADE-LPT STG 4",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-108-608-0",
        "Description": "NOZZLE-SEGMENT STG 1",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-108-708-0",
        "Description": "NOZZLE-SEGMENT STG 1",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-109-109-0",
        "Description": "VANE, LPT, STAGE 2 (5BP)",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-109-151-0",
        "Description": "VANE, LPT, STAGE 2 (5BP)",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-109-251-0",
        "Description": "VANE, LPT, STAGE 2 (5BP)",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-109-309-0",
        "Description": "VANE, LPT, STAGE 2 (5BP)",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-109-705-0",
        "Description": "VANE, LPT, STAGE 3 (5BP)",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-110-103-0",
        "Description": "NOZZLE SEG-STG 4",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-110-203-0",
        "Description": "NOZZLE SEG-STG 4",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-111-502-0",
        "Description": "RING 1-ROTATING",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-111-701-0",
        "Description": "RING 3-ROTATING",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-112-707-0",
        "Description": "AIRSEAL, LPT OUTER STATIONARY, STAGE 2",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-116-102-0",
        "Description": "BLADE-LPT STG 4",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-116-103-0",
        "Description": "BLADE, LPT, STAGE 4",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-116-702-0",
        "Description": "SHIELD",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-121-602-0",
        "Description": "SEAL-SEG STG 4",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "338-121-701-0",
        "Description": "PLATE-RETAINING",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3399104-1",
        "Description": "PILOT VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3399106-2",
        "Description": "REGULATOR VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "340-001-028-0",
        "Description": "BLADE, FAN, STAGE 1",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "340-001-028-0",
        "Description": "BLADE, FAN, STAGE 1",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "340-002-602-0",
        "Description": "FAIRING, FAN",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "340-058-303-0",
        "Description": "VANE, BOOSTER ASSEMBLY, STAGE 3",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": 340565,
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "34100005-1",
        "Description": "ENGINE FIRE EXTINGUISHING BOTTLE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3415-131P",
        "Description": "RING, RETAINER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3415-181SP",
        "Description": "RINGS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3415-275SP",
        "Description": "RINGS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3415-406SP",
        "Description": "RINGS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "341E030000",
        "Description": "SOLENOID THERMOSTAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "342B050000",
        "Description": "THERMOSTAT, CONTROL",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "34600049-1",
        "Description": "FIRE BOTTLE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "35000-00-01",
        "Description": "CLOCK-DIGITAL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "35008-307",
        "Description": "MODULE OVERHEAT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3505582-65",
        "Description": "AIR TURBINE ENGINE STARTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3505582-65",
        "Description": "AIR TURBINE ENGINE STARTER",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3505920-8",
        "Description": "ADU",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "35-0D5-1003",
        "Description": "LOUDSPEAKER-AMPLI.,COCKPI",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "350E053020909",
        "Description": "FLIGHT WARNING COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "35-0L0-1002-05",
        "Description": "ECAM CONTROL PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "35-0L5-1005-08",
        "Description": "BCL-BATTERY CHARGE LIMITER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3510-0044-07",
        "Description": "COFFEE MAKER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3530000-1",
        "Description": "SENSOR-FUEL LEVEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "35EN24-4",
        "Description": "LIMIT SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3617331-1",
        "Description": "ADAPTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3617406-1",
        "Description": "MAST DRAIN BRACKET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3617560-1",
        "Description": "AFT OIL COOLER BRACKET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3617906-1",
        "Description": "RETAINER OIL TUBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "362-021-002",
        "Description": "INDICATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1\/1\/3720",
        "Description": "FIRE DETECTION UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "372-079-002",
        "Description": "STABILIZER POSITION INDICATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3800702-1",
        "Description": "AUXILIARY POWER UNIT 131-9(B)",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3810684-2",
        "Description": "VANE, INLET GUIDE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3810794-2",
        "Description": "GEAR SEGMENT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3810808-3",
        "Description": "IGV HOUSING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3810875-1",
        "Description": "COVER INL GD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3810889-5",
        "Description": "UPPER INLET PLENUM",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3810900-4",
        "Description": "FAN EXIT DUCT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3810905-1",
        "Description": "INLET DUCT ASSEMBLY-COMPOSITE, UPPER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3810929-3",
        "Description": "FAN INLET DUCT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "381800-1005",
        "Description": "ACTUATOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3822400-5",
        "Description": "COMPRESSOR ROTOR, DRIVEN",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3822400-5",
        "Description": "COMPRESSOR ROTOR, DRIVEN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3822423-1",
        "Description": "COMPRESSOR BEARING NUT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3822504-3",
        "Description": "SHAFT, TURBINE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3822510-2",
        "Description": "SHAFT, MATCHED SET, COMPRESSOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3822510-2",
        "Description": "SHAFT, MATCHED SET, COMPRESSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3822529-4",
        "Description": "DRIVEN COMPRESSOR COUPLING SHAFT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3822666-2",
        "Description": "BEARING, BALL, DUPLEX (CERAMIC)",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3826282-2",
        "Description": "2ND STAGE DIFFUSER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3826928-2",
        "Description": "ROD END BEARING",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3826928-2",
        "Description": "ROD END BEARING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3826994-2",
        "Description": "COVER, IGV",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3827054-2",
        "Description": "DRIVEN COMPRESSOR DIFFUSER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3827067-1",
        "Description": "LOAD COMPRESSOR HEAT SHIELD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3827075-2",
        "Description": "WASHER SPR CPRSN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3827165-2",
        "Description": "CLEVIS ASSEMBLY",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3827165-2",
        "Description": "CLEVIS ASSEMBLY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3827203-1",
        "Description": "BOLT ENG CPRSR DIFF",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3827265-8",
        "Description": "BEARING HOUSING",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3827265-8",
        "Description": "BEARING HOUSING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3827324-3",
        "Description": "SUPPORT, STATIONARY SEAL, AIR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3827324-3",
        "Description": "SUPPORT, STATIONARY SEAL, AIR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3827385-2",
        "Description": "COMPRESSOR BEARING RETAINER PLATE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3827401-1",
        "Description": "DESWIRL, ENGINE COMPRESSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3827405-3",
        "Description": "ROD- ACTUATOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3827405-4",
        "Description": "ACTUATOR ROD",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3827405-4",
        "Description": "ACTUATOR ROD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3827426-3",
        "Description": "HOUSING, BEARING, DRIVEN COMPRESSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3830187-3",
        "Description": "FUEL NOZZLE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3830416-1",
        "Description": "FUEL NOZZLE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3830461-5",
        "Description": "SHROUD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3840170-2",
        "Description": "SHAFT, COUPLING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3840171-2",
        "Description": "SHAFT COUPLING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3840172-1",
        "Description": "AFT BEARING SHAFT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3840243-1",
        "Description": "ROLLER BEARING SPACER RING",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3840243-1",
        "Description": "ROLLER BEARING SPACER RING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3840244-1",
        "Description": "TIESHAFT NUT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3840244-1",
        "Description": "TIESHAFT NUT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3844018-1",
        "Description": "STATOR ASSY 3STG",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3844573-2",
        "Description": "RING SPRT STTR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3844575-2",
        "Description": "1ST STAGE SHROUD SEGMENT TURBINE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3844579-2",
        "Description": "RING SHROUD SUPPORT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3844582-1",
        "Description": "2ND STAGE STATOR SEAL WELDMENT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3844587-4",
        "Description": "RING, CONTAINMENT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3844587-4",
        "Description": "RING, CONTAINMENT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3844595-2",
        "Description": "SEAL SHRD SEG",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3844619-3",
        "Description": "INNER TRANSITION LINER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3844619-3",
        "Description": "INNER TRANSITION LINER",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3844760-2",
        "Description": "1ST STAGE TURBINE NOZZLE SEGMENT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3844766-4",
        "Description": "COMBUSTOR CASE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3844766-4",
        "Description": "COMBUSTOR CASE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3844776-3",
        "Description": "2ND STAGE TURBINE STATOR BAFFLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3844861-3",
        "Description": "SIDE THERMAL INSULATION BLANKET",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3844861-4",
        "Description": "SIDE THERMAL INSULATION BLANKET",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3844861-7",
        "Description": "AFT SIDE THERMAL INSULATION BLANKET",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3844861-9",
        "Description": "SIDE THERMAL INSULATION BLANKET",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3844861-9",
        "Description": "SIDE THERMAL INSULATION BLANKET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3844864-1",
        "Description": "2ND STAGE STATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3844907-1",
        "Description": "HOUSING ASSEMBLY, TURBINE BEARING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3844917-1",
        "Description": "RETAINER BEARING",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3850100-5",
        "Description": "HOUSING EDUCTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3850104-3",
        "Description": "CAP, EXHAUST",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3850104-4",
        "Description": "CAP, EXHAUST",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3861046-1",
        "Description": "GENERATOR GEARSHAFT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3861046-1",
        "Description": "GENERATOR GEARSHAFT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3861047-1",
        "Description": "HIGH SPEED PINION GEARSHAFT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3862218-1",
        "Description": "HOUSING ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3863150-1",
        "Description": "RETAINER BRG",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3863167-1",
        "Description": "LUBRICATING NOZZLE ASSY.",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3863167-1",
        "Description": "LUBRICATING NOZZLE ASSY.",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3863344-3",
        "Description": "OIL PICKUP TUBE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3863349-1",
        "Description": "ROLLER OIL FILL CAP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3863396-2",
        "Description": "LUBE MANIFOLD",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3863396-2",
        "Description": "LUBE MANIFOLD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3863397-1",
        "Description": "RETAINER BRG",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3863426-3",
        "Description": "GEARBOX MATCHED HOUSING ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3863541-2",
        "Description": "OIL PICKUP TUBE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3863541-2",
        "Description": "OIL PICKUP TUBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3868027-1",
        "Description": "SHAFT, QUILL",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": 387,
        "Description": "LAMP = 10 PKG",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "3870205-1",
        "Description": "GEARSHAFT CLUSTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3870208-1",
        "Description": "IDLE GEAR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3870208-1",
        "Description": "IDLE GEAR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3870213-7",
        "Description": "STARTER ADAPTER",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3870245-1",
        "Description": "AFT MOUNT BRACKET",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3870245-1",
        "Description": "AFT MOUNT BRACKET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3870246-1",
        "Description": "BRACKET GRND HDLG AFT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3870246-1",
        "Description": "BRACKET GRND HDLG AFT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3870248-1",
        "Description": "HOIST BRACKET",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3870248-1",
        "Description": "HOIST BRACKET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3876132-12",
        "Description": "LEAD, ELECTRICAL IGNITER PLUG",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3876225-2",
        "Description": "SENSOR, INLET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3880971-1",
        "Description": "FITTING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3881684-2",
        "Description": "TUBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3881684-2",
        "Description": "TUBE",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "3881685-2",
        "Description": "TUBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3881708-3",
        "Description": "TUBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3881763-1",
        "Description": "OIL COOLER RETURN TUBE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3881764-1",
        "Description": "OIL COOLER SUPPLY TUBE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3881826-2",
        "Description": "SCAVENGE TUBE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3881826-2",
        "Description": "SCAVENGE TUBE ASSY",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3881827-1",
        "Description": "TUBE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3881828-1",
        "Description": "TUBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3881836-1",
        "Description": "TURBINE BEARING SUPPLY TUBE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3883830-1",
        "Description": "FLOW DIVIDER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3883837-1",
        "Description": "MANIFOLD, FUEL, SECONDARY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3883846-2",
        "Description": "TUBE, APU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3883848-3",
        "Description": "TUBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3883895-1",
        "Description": "TUBE- IGV RETURN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3883897-1",
        "Description": "TUBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3883920-1",
        "Description": "TUBE- MANIFOLD SUPPLY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3883952-1",
        "Description": "TUBE ASSEMBLY, SCV-IGV SUPPLY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3883953-1",
        "Description": "TUBE ASSEMBLY, SCV-IGV RETURN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3883954-1",
        "Description": "FUEL SUPPLY TUBE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3883954-2",
        "Description": "TUBE ASSY, METAL - FUEL SUPPLY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3883957-1",
        "Description": "FCU DRAIN TUBE ASSY.",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3883958-1",
        "Description": "IGVA DRAIN TUBE ASSY.",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3883959-1",
        "Description": "LOAD COMPRESSOR DRAIN TUBE ASSY.",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3884971-1",
        "Description": "TOTAL PRESSURE PROBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3884971-1",
        "Description": "TOTAL PRESSURE PROBE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3884980-3",
        "Description": "TUBE- P STATIC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3884983-3",
        "Description": "TUBE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3884984-3",
        "Description": "TUBE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3884988-1",
        "Description": "DUCT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3885003-2",
        "Description": "DUCT-SURGE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3885007-1",
        "Description": "COMPRESSOR DISCHARGE DUCT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3885007-2",
        "Description": "COMPRESSOR DISCHARGE DUCT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3885007-2",
        "Description": "COMPRESSOR DISCHARGE DUCT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3885010-1",
        "Description": "GEARBOX VENT TUBE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3885011-1",
        "Description": "TOTAL PRESSURE TUBE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3885012-1",
        "Description": "STATIC PRESSURE TUBE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3886188-3",
        "Description": "IGV ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3886188-3",
        "Description": "IGV ACTUATOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3888394-221204",
        "Description": "ELECTRONIC CONTROL BOX",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3888448-1",
        "Description": "HARNESS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3888449-1",
        "Description": "WIRING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3888449-2",
        "Description": "WIRING HARNESS APU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "38E93-5",
        "Description": "ANTI ICING VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3910032-104",
        "Description": "VALVE AY",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "392678-3-1",
        "Description": "VALVE, TURBOFAN CONTROL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "392678-3-1",
        "Description": "VALVE, TURBOFAN CONTROL",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3930007-105",
        "Description": "VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": 3945122506,
        "Description": "ELAC (Elevator Aileron Computer)",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": 3945128215,
        "Description": "ELAC-ELEVATOR AND AILERON COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": 3945128216,
        "Description": "ELEVATOR AILERON COM",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": 3945129100,
        "Description": "ELAC - ELEVATOR & AILERON COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": 3957985114,
        "Description": "ENGINE INTERFACE UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "396442-1",
        "Description": "FLOW CONTROL VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "397728-3-1",
        "Description": "VALVE, S\/O",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "40-0070-2",
        "Description": "LIGHT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "400-605",
        "Description": "SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "40340-10011",
        "Description": "VALVE AY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4039892-904",
        "Description": "INDICATOR ALTIMETER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4040800-911",
        "Description": "COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "saus-46",
        "Description": "777 APU STAND",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "40520-30019",
        "Description": "CYLINDER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4052500-927",
        "Description": "COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4055900-914",
        "Description": "SYMBOL GENERATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4063-19972-01AA",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4071400-904",
        "Description": "ADM",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4073770-902",
        "Description": "PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4073870-901",
        "Description": "AIMS DISPLAY SELECT PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4073970-901",
        "Description": "DEVICE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4073970-951",
        "Description": "CONTROL DEVICE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "407EED1-1",
        "Description": "INDICATR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4081600-930",
        "Description": "ELECTRONIC DISPLAY UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4082499-902",
        "Description": "FLIGHT CONTROL COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4082499-903",
        "Description": "COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4082730-901",
        "Description": "EFIS CONTROL PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": 40885,
        "Description": "VALVE CONTROL UNIT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "4091900-941",
        "Description": "B777 DIGITAL DISPLAY UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4100362-1",
        "Description": "MOTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4101002-11",
        "Description": "TRANSFER UNIT-HYD POWER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4101002-11",
        "Description": "TRANSFER UNIT-HYD POWER",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "4101002-9",
        "Description": "POWER TRANSFER UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4-1071-100",
        "Description": "CHIP DETECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "413T1024-2",
        "Description": "LATCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "416-0001-9",
        "Description": "COFFEE MAKER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "416-00318-003",
        "Description": "WHC-WINDOW HEAT COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "416-1001-23",
        "Description": "COFFEE MAKER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "416A1401-22",
        "Description": "BRACKET ASSY - MEGAPHONE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "417A2508-9",
        "Description": "WATER TANK ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "417T3052-147",
        "Description": "OUTBD PSU",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "417T3052-33",
        "Description": "PSU ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "417T3055-344B",
        "Description": "SPACER PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "417T3057-42",
        "Description": "PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4188-00",
        "Description": "STATIC INVERTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "419300-1003",
        "Description": "DUAL INPUT RUDDER PCU ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "41SG118-2",
        "Description": "XDCR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": 4205602,
        "Description": "PUMP-ELECTRIC MOTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4-273-03",
        "Description": "TRU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "42-935-2",
        "Description": "ANTISKID CONTROL UNIT - M0162",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4305990100",
        "Description": "SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4315542",
        "Description": "RETRACTABLE LANDING LIGHT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4321561",
        "Description": "LIGHT AY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4345-003",
        "Description": "LAMP STUD",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "436-2",
        "Description": "DETECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "44933",
        "Description": "IGN EXCITER (ALT: 10-621630-1)",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4500003K",
        "Description": "ELECTRONIC CONTROL BOX",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4500003L",
        "Description": "ELECTRONIC CONTROL B",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4500055",
        "Description": "Plate Assy",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4500074",
        "Description": "QUILL SHAFT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4500517",
        "Description": "",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "450-1-3100-00",
        "Description": "SWITCH-PRESSURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4501936",
        "Description": "",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4502123",
        "Description": "",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "450-2-3100-00",
        "Description": "SWITCH-PRESSURE",
        "Condition": "NE",
        "Quantity": 1
      },
      {
        "PN": "450-2-3100-00",
        "Description": "SWITCH-PRESSURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4502474",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4503344",
        "Description": "HOUSING ASSY, COMPRESSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4503366",
        "Description": "I.D. PLATE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "45-0351-1",
        "Description": "LIGHT LANDING LH RETRACT - LH",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "45-0351-4",
        "Description": "LIGHT LANDING RH RETRACT - RH",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "45-0351-5",
        "Description": "LIGHT ASSY",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "4504071",
        "Description": "INLET GUIDE VANE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4504742",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4506052",
        "Description": "BRACKET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "466090",
        "Description": "FIRE EXT",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "47145-147",
        "Description": "THS ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "47215920BB00",
        "Description": "PROBE HEAT COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "473475-3",
        "Description": "BOTTLE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "473597-5",
        "Description": "SMOKE DETECTOR TYPE II",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "473955-1",
        "Description": "CARGO FIRE DETECTION MODULE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "476W2220-9N",
        "Description": "CRADLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "488550-10-01",
        "Description": "ACTUATOR CONTROL ELECTRONICS UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "49-170-11",
        "Description": "SLAT\/FLAP CONTROL COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "49-177-12",
        "Description": "PRIMARY FLIGHT COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4950079",
        "Description": "CLAMP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4950565",
        "Description": "CLAMP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4950689-3",
        "Description": "SEGMENT-HEAT BLANKET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4950689-4",
        "Description": "SEGMENT-HEAT BLANKET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "5006284A",
        "Description": "HOUSING",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "5006349",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "503CA04F2-02Y00",
        "Description": "CONTACTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "510846-1",
        "Description": "STATOR ALTERNATOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "5145-1-64",
        "Description": "AUDIO SELECTOR PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "521100",
        "Description": "GCU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "5-211S614-80",
        "Description": "PACKING (Alt: 5-211E600-7 & 5-211)",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "522-0700-023",
        "Description": "GLIDE SLOPE ANTENNA",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "548376-6",
        "Description": "CABIN TEMPERATURE CONTROLLER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "56090-24",
        "Description": "PIN, QUICK RELEASE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "5653732",
        "Description": "VALVE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "568-1-29117-002",
        "Description": "PUMP, FUEL OVERRIDE\/JETTISON",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "56A621",
        "Description": "BLADE ASSY OF-LPC 1STG",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "57186-10",
        "Description": "HYDRAULIC PUMP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "572756-1",
        "Description": "THERMAL OVERHEAT SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "572757-1",
        "Description": "THERMAL OVERHEAT SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "5-89354-3149",
        "Description": "NO1 WINDOW LH",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "5908704",
        "Description": "SPRING WAVE WASHER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "5908953",
        "Description": "SCREEN DRAIN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "5909614",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "5910228",
        "Description": "RINGS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "5938214-1",
        "Description": "SEGMENT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "5956814-503N",
        "Description": "WHEEL ASSY-NOSE STEERING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "59600-5003",
        "Description": "HYD SOL VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "5965440-5501",
        "Description": "RESERVOIR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "600-154-1251",
        "Description": "RELAY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "600700-00-501",
        "Description": "HOT AIR TRIM VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "601343",
        "Description": "TUBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "601847",
        "Description": "PLUG-MAGNETIC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "603223",
        "Description": "SLIP TUBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "60-3368-7M",
        "Description": "STROBE POWER SUPPLY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "60-3368-9",
        "Description": "PWR SPLY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "60-4791-3",
        "Description": "POWER SUPPLY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "605457-8",
        "Description": "FAN ASSEMBLY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "606707-1",
        "Description": "EXHAUST FAN",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "607510-2",
        "Description": "TEMPERATURE CONTROL BOX",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "60-755100-5",
        "Description": "FUEL PUMP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "60B40026-20",
        "Description": "AUTO TRANSFORMER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "6105",
        "Description": "FUSE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "617166-1",
        "Description": "AIR TEMP SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "62-0101-123",
        "Description": "RAIL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-4593-505",
        "Description": "UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-5001-109",
        "Description": "R.D.M.I. TYPE NO. RDMI-743",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "622-5001-504",
        "Description": "INDICATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-5045-202",
        "Description": "GENERATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-5048-104",
        "Description": "PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-5048-341",
        "Description": "PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-5132-130",
        "Description": "WEATHER RADAR TRANSCEIVER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-5136-201",
        "Description": "ANTENNA MOUNT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-5137-601",
        "Description": "WEATHER RADAR ANTENNA",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "622-5219-004",
        "Description": "ASSY-VHF COMM L & R",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-5220-020",
        "Description": "VOR\/MARKER RECEIVER,700",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-5222-102",
        "Description": "A.D.F RECEIVER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-6089-102",
        "Description": "ALERT PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-6831-002",
        "Description": "PANEL VHF",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-7878-201",
        "Description": "AIR TRAFFIC CONTROL TRANSPONDER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "624014-1",
        "Description": "TEMPERATURE SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "624016-1",
        "Description": "DUCT AIR TEMP SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "624016-2",
        "Description": "SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "624018-1",
        "Description": "SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "624160",
        "Description": "COUPLING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "624173",
        "Description": "COUPLING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "624185",
        "Description": "TUBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "624229",
        "Description": "SPRING, COUPLING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "625878-1",
        "Description": "SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "625928-2",
        "Description": "SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "625928-3",
        "Description": "SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "625946-8",
        "Description": "CONTRLLR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "641121-1",
        "Description": "DUCT ZONE OVERHEAT SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "641172-1",
        "Description": "SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "64141-580-1",
        "Description": "STANDBY BAROMETRIC ALTIMETER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "64300-100",
        "Description": "HEADSET AIRMAN 750",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "64300-200",
        "Description": "AIRMAN 750 HEADSET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "6430A",
        "Description": "VARIABLE POWER TRANSFORMER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "645405-2",
        "Description": "FAN-RECIRCULATION",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "64882-206-1",
        "Description": "PRESSURE INDICATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "649-781-775-0",
        "Description": "SCREW",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "650-784-038-0",
        "Description": "RING-SELF LOCKING",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "6510",
        "Description": "AIRSPEED SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "65-16323-34",
        "Description": "WINDSHIELD,  ASSY R\/H #3",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "65-17821-18",
        "Description": "ASSY, MODULAR PACKAGE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "65-17821-18",
        "Description": "ASSY, MODULAR PACKAGE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "65-17821-20",
        "Description": "PRESSURE MODULAR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "65-17821-20",
        "Description": "PRESSURE MODULAR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "65-44562-1",
        "Description": "BARREL ASSY.",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "65-44681-16",
        "Description": "VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "65-44741-8",
        "Description": "BLOCKING VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "65-45166-25",
        "Description": "ROD ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "65-45792-6",
        "Description": "PANE",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "65-52810-64",
        "Description": "UNIT AY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "66950",
        "Description": "VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "6730C010000",
        "Description": "VALVE-FAN AIR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "6732A010000",
        "Description": "VALVE FAN AIR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "6740B050000",
        "Description": "OVER PRESSURE VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "6752-311-20",
        "Description": "CIRCUIT BREAKER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "6752-311-50",
        "Description": "CIRCUIT BREAKER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "676-3291-002",
        "Description": "PLUG",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "6773E010000",
        "Description": "VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "6773E010000",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "6774E010000",
        "Description": "VALVE - BLEED AIR PRESSURE REG.",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "69-17791-3",
        "Description": "ARM",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "69-37291-8",
        "Description": "ROD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "69-37317-300",
        "Description": "HYDRAULIC PUMP MODULE AY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "69-37324-18",
        "Description": "CABIN AIR TEMP MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "69-37369-24",
        "Description": "MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "69-37369-300",
        "Description": "MOD-GROUND PROXIMITY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "69-55179-78",
        "Description": "LIGHT DIMMER UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "69-71002-12",
        "Description": "LEVER ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "69-73614-47",
        "Description": "MODULE, POWER MANAGEMENT CONTROL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "69-73713-17",
        "Description": "NAV MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "69-76436-9",
        "Description": "MODULE,STAB TRIM FLT. DECK DOOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "69-78214-4",
        "Description": "AURAL WARNING MODULE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "70507-2",
        "Description": "VALVE AY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "70507-3",
        "Description": "VALVE AY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7121-19971-01AC",
        "Description": "CONTROLLER-CABIN PRESSURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7123-19973-03AC",
        "Description": "CABIN PRESSURE SELECTOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "7123-19973-03AC",
        "Description": "CABIN PRESSURE SELECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "71234",
        "Description": "HYDRAULIC RESERVOIR HAND PUMP",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "716TS06Y",
        "Description": "NW.STRG.HANDWHEEL SMTR.UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "71784",
        "Description": "HYDRAULIC VALVE MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "71998",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "72071000",
        "Description": "OVEN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "72GP39-4",
        "Description": "XMTR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7335",
        "Description": "LAMP",
        "Condition": "NE",
        "Quantity": 1
      },
      {
        "PN": "734-15610-03",
        "Description": "PDU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "737-0010-633",
        "Description": "737NG WINGLET",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "737-0010-634",
        "Description": "737NG WINGLET",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "737-8618-1",
        "Description": "LIGHTPLATE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "740119H",
        "Description": "INTEGRATED DRIVE GENERATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "740120C",
        "Description": "GCU-GENERATOR CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "740121A",
        "Description": "GROUND POWER CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "74-20",
        "Description": "HALON EXTINGUISHER-FIRE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "743-0304-001",
        "Description": "REPRODUCER, TAPE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "745-3000-515",
        "Description": "INLET COWL",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "745-4000-503",
        "Description": "FAN COWL LH (ENGINE RH)",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "746923E",
        "Description": "ELEC GENE INTERFACE UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "746A0000-06",
        "Description": "VALVE-TRIM AIR PRESSURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "748A0000-08",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "751460",
        "Description": "ELEMENT-FILTER",
        "Condition": "NE",
        "Quantity": 1
      },
      {
        "PN": "7517900-10012",
        "Description": "ACSS TCAS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7517900-10020",
        "Description": "RT-950 TCAS COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7519200-920",
        "Description": "CMU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7519200-921",
        "Description": "CMU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7552355",
        "Description": "FILTER ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "756426",
        "Description": "GEAR SHAFT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "756427",
        "Description": "START MOTOR GEAR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "756461-1",
        "Description": "COVER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "756466",
        "Description": "OIL PUMP GEAR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "756469",
        "Description": "",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "756664",
        "Description": "RETAINER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "756665",
        "Description": "COVER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "756668",
        "Description": "",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "756670",
        "Description": "SPACER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "756671",
        "Description": "BEARING SUPPORT ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "756678",
        "Description": "PUMP SCAVENGE OIL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "756681",
        "Description": "CAP-FILTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "756687",
        "Description": "JET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "756731",
        "Description": "SPRING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "757290",
        "Description": "",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "757291",
        "Description": "",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "757292",
        "Description": "",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "757293",
        "Description": "",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "757307",
        "Description": "",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "757333-2",
        "Description": "WASHER FLAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "757366",
        "Description": "PLUG",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "759C0000-02",
        "Description": "CONTROLLER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "759D0000-02",
        "Description": "CONTROLLER-PACK",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "761574B",
        "Description": "INTEGRATED DRIVE GENERATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "761951",
        "Description": "STARTER SHAFT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "762080-1",
        "Description": "SAFETY VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "762185F",
        "Description": "GENERATOR CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "762185H",
        "Description": "GENERATOR CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "762187F",
        "Description": "BUS POWER CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "762525",
        "Description": "SEAL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "763810-6",
        "Description": "CABIN PRESSURE CONTROLLER",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "763810-6",
        "Description": "CABIN PRESSURE CONTROLLER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "763A0000-03",
        "Description": "TEMP. SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "766A0000-01",
        "Description": "SENSOR-TEMPERATURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "77-109-12",
        "Description": "XMTR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "773856-15",
        "Description": "VALVE AY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "773A0000-01",
        "Description": "SENSOR-TEMPERATURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "775A0000-08",
        "Description": "CONTROLLER-ZONE TEMP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "775D0000-01",
        "Description": "ZONE CONTROLLER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "780B0000-01",
        "Description": "SENSOR UNIT, FLAP\/SLAT COMMAND",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "780B0000-01",
        "Description": "SENSOR UNIT, FLAP\/SLAT COMMAND",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "78169-02",
        "Description": "MOD ASSY",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "785-002-8",
        "Description": "BMC-BLEED MONITORING COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "785002-9",
        "Description": "BLEED MONITORING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "785840-4",
        "Description": "BLEED MONITOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "78695-1",
        "Description": "SNUBBER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "786A0000-06",
        "Description": "CONT UNIT POWER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "786A0000-12",
        "Description": "POWER CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7900064",
        "Description": "TOILET",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "790424-4",
        "Description": "VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "792-6140-001",
        "Description": "HF ANTENNA COUPLER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "792A0000-07",
        "Description": "ACTUATOR-FLAP,NO.2",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "793322",
        "Description": "PROBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "796-809-6A",
        "Description": "CADENSICON",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "796-815-01-02",
        "Description": "PRESELECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8011612",
        "Description": "PACKING",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "801307-00",
        "Description": "OXYGEN CYLINDER (115 CU FT)",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "801A50-0005A",
        "Description": "C-SEAL",
        "Condition": "NE",
        "Quantity": 1
      },
      {
        "PN": "80-207-01",
        "Description": "SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8055515-4507",
        "Description": "PTA-45B DATA PRINTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "810200-3",
        "Description": "CTC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "810208-7",
        "Description": "HEAT EXCHANGER",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "810209-11",
        "Description": "AIR CYCLE MACHINE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "810221-2",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "810230-4",
        "Description": "SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "810505-3",
        "Description": "ACIPS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "810601-3",
        "Description": "VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "810A0000-04",
        "Description": "SERVOCONTROL-RUDDER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "810A0000-05",
        "Description": "RUDDER SERVO CONTROL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "813500-401",
        "Description": "ACTUATOR ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "813500-401",
        "Description": "ACTUATOR ASSY",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "813500-409",
        "Description": "ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "816420-3",
        "Description": "Engine Data Interface Unit",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8195-33",
        "Description": "SNUBBER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0006-104",
        "Description": "COMPUTER ASSY - AUTO PILOT FLIGHT DIRECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0006-105",
        "Description": "AUTOPILOT FLIGHT DIRECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0297-001",
        "Description": "RECEIVER VOR\/MB",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0297-020",
        "Description": "RECEIVER, VOR\/MB",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0299-001",
        "Description": "ADF RECEIVER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0329-001",
        "Description": "DISTANCE MEASURING EQUIPMENT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0330-001",
        "Description": "RECEIVER-TRANSMITTER, HF",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "822-0334-020",
        "Description": "RADIO ALTIMETER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0336-001",
        "Description": "TRANSPONDER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0447-101",
        "Description": "KEYBOARD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0693-003",
        "Description": "TRANSCEIVER VHF",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0726-020",
        "Description": "VOR\/MARKER RECEIVER,700A",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "822-0726-120",
        "Description": "VOR RECEIVER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0990-003",
        "Description": "TRANSCEIVER, HF",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0990-004",
        "Description": "HF TRANSCEIVER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-1047-002",
        "Description": "TRANSCEIVER VHF COM",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-1047-003",
        "Description": "TRANSCEIVER VHF COM",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "822-1047-030",
        "Description": "VHF-900 COMMUNICATIONS TRANSCEIVER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-1152-002",
        "Description": "GLOBAL LANDING UNIT TYPE NO. GLU-920",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-1152-122",
        "Description": "GLU-920 GLOBAL LANDING UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-1250-002",
        "Description": "TRANSCEIVER VHF COM",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-1293-321",
        "Description": "TCAS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-1338-002",
        "Description": "TRANSPONDER                                      ",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-1338-021",
        "Description": "TRANSPONDER-ATC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-1338-205",
        "Description": "ATC TRANSPONDER       737",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-2911-002",
        "Description": "TCAS II TRANSMITTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "83000-05602",
        "Description": "UNIT, WINDOW HEAT CONTROL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "83000-05604",
        "Description": "WINDOW HEAT CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8-344-02",
        "Description": "SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8-344-03",
        "Description": "SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "861CAB-0001",
        "Description": "ATTACK SENSOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "8-678-03",
        "Description": "PSCU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "87232323V00",
        "Description": "SENSOR-DUCT TEMPERATURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "87292325V04",
        "Description": "AVNCS EQPT VENT COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "87292325V06",
        "Description": "AVIONICS EQT VENTIL CPT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "87292325V07",
        "Description": "COMPUTER EQUIPMENT VENTILATION",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8-736-05",
        "Description": "POWER SUPPLY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "89-01-07000",
        "Description": "HANDSET-COCKPIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "89-01-07122",
        "Description": "HANDSET, CABIN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8910-332",
        "Description": "FUEL RETURN VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8921082G5",
        "Description": "LAVATORY WATER HEATER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "899-156-612",
        "Description": "SENSOR, WASTE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8AS193",
        "Description": "SWITCH",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "8DJ339WAG1",
        "Description": "IND",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8ES005045-00",
        "Description": "PSU-POWER SUPPLY UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8ES005304-00",
        "Description": "POWER SUPPLY UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8ES005309-00",
        "Description": "SUPPLY UNIT-POWER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8ES455012-00",
        "Description": "POWER SUPPLY UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8TC19AAR1",
        "Description": "T3 SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8TJ167GHH1",
        "Description": "TRANSMITTER-FUEL FLOW",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "901950-02",
        "Description": "FIRE DETECTION CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "902020",
        "Description": "FIRE DETECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9024-15704-03",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9024-15704-2",
        "Description": "SAFETY VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9027-20010",
        "Description": "SELECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9043110-16",
        "Description": "LEAD ASSY-IGNITION",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "924-09",
        "Description": "KIT, SPARES FLOW DIVIDER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "924D100-1",
        "Description": "ACTR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "925010-101",
        "Description": "DIU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "931D100-3",
        "Description": "PDU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "937E202G2",
        "Description": "COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "940732",
        "Description": "STANDBY SYSTEM HYDRAULIC PUMP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "941V100",
        "Description": "AIR SHUT OFF VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "94830-05",
        "Description": "BRACKET, FORWARD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9508175",
        "Description": "VENT FLOAT VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9523M11G03",
        "Description": "RETAINER",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "9523M12G01",
        "Description": "RETAINER-BLADE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "9560158820",
        "Description": "WASHER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9560162060",
        "Description": "CLAMP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9560163900",
        "Description": "RING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9599-607-12352",
        "Description": "RADIO ALTIMITER ANTENNA",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9599-607-12352",
        "Description": "RADIO ALTIMITER ANTENNA",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "9599-607-14942",
        "Description": "TRANSCEIVER-RADIO ALTI.",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "96153250-32",
        "Description": "DMC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9615325060",
        "Description": "DISPLAY MANAGEMENT COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "963A0000-02",
        "Description": "VALVE-TRIM AIR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "964-0401-016",
        "Description": "DATALOADER                                        ",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "964-0453-011",
        "Description": "HF ANTENNA COUPLER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "965-0648-004",
        "Description": "GPWC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "965-0976-003-206-206",
        "Description": "EGPWS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "965-0976-003-232-232",
        "Description": "EGPWS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "965-0976-020-218-218",
        "Description": "EGPWS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "965-1676-002",
        "Description": "MARK V EGPWS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "967-0212-002",
        "Description": "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "969291-1",
        "Description": "SHAFT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9700-C1A-BF23A",
        "Description": "O2 BOTTLE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "9700-C1A-F23AN",
        "Description": "PORTABLE OXYGEN CYL.",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "9700-G2A-BF10A",
        "Description": "PORTABLE OXYGEN BOTTLE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "971600",
        "Description": "POWER UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "972C10-2",
        "Description": "VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "980-4700-003",
        "Description": "FLIGHT DATA RECORDER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "980-4700-042",
        "Description": "SSFDR-SOLID STATE FLIGHT DATA RECORDER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "980-6022-001",
        "Description": "COCKPIT VOICE RECORDER, SOLID STATE MEMORY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "980-9900-001",
        "Description": "AUDIO VIDEO REPRODUC UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9992M65G08",
        "Description": "SHROUD ASSY-CPRSR STTR STG 1",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "9A APU STAND",
        "Description": "APU Stand",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A1-18-1030",
        "Description": "LIGHT SHIELD",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "A12SA",
        "Description": "MEGAPHONE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A1650-191",
        "Description": "WATER HOSE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A25313002",
        "Description": "VALVE BRAKE SELECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A25315-1",
        "Description": "VALVE-PARKING BRAKE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A25434006-3000",
        "Description": "BRAKE DUAL DISTRIBUTION VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A25434006-3000",
        "Description": "BRAKE DUAL DISTRIBUTION VALVE",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "A25461-104",
        "Description": "AUTO SELECTOR NOR BRK SYS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A420-062894-01",
        "Description": "Solenoid",
        "Condition": "NS",
        "Quantity": 1
      },
      {
        "PN": "A800100-3",
        "Description": "FIRE EXTINGUISHER - LAVATORY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "AC69576",
        "Description": "VALVE SOLENOID MAKE-UP AIR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "ACP2788AB04",
        "Description": "ACP-AUDIO CONTROL PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "ACP2788AB05",
        "Description": "AUDIOCONTROL PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "ACP2788AF01",
        "Description": "AUDIO CONTROL PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "AN6289J4",
        "Description": "NUT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "AN814-6DL",
        "Description": "PLUG",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "AR4714-11",
        "Description": "ELECTRIC DOOR STRIKE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "AR4714-7",
        "Description": "DOOR STRIKE, ELECTRICALLY OPERATED",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9700-C1A-F23AN",
        "Description": "PORTABLE O2P\/M (UN1072)",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2LA402515-00",
        "Description": "LIGHT-ANTICOLLISION",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A25434006-3000",
        "Description": "VALVE-DUAL DISTRIBUTION",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8ES005045-00",
        "Description": "SUPPLY UNIT-POWER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "C24839010",
        "Description": "MANIFOLD ALTER.BRAKE SV",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "795020-12-020",
        "Description": "DMU-DATA MANAGEMENT UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "C12850AC03",
        "Description": "FCU-FLIGHT CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2A7206B",
        "Description": "ACTUATOR-FEEL &",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7514081-901",
        "Description": "ANTENNA TCAS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "15801-040",
        "Description": "FCU (MONOGRAM SANITATION)",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2234320-01-01",
        "Description": "FDIMU-FLIGHT DATA INT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8450B5",
        "Description": "HINGE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8000959Y00",
        "Description": "FLOODLIGHT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "736A0000-02",
        "Description": "SENSOR MIXER TEMP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3214-54",
        "Description": "EMMERGENCY POWER SUPPLY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "715TS06Y11",
        "Description": "XMTR UNIT-NW STRG HANDWHE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "AMU2790CB06",
        "Description": "AMU-AUDIO MANAGEMENT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "315A2800-1",
        "Description": "ACT.ASSY-NON LOCK.",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "G540DA74",
        "Description": "TRANSMITTER LEVEL LIQUID",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "711TS06Y",
        "Description": "TRANSMITTER UNIT-N,W STRG",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7304-01-02",
        "Description": "DETECTION UNIT-FIRE ENGIN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "761A0000-04",
        "Description": "ACTUATOR INLET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8ES455012-06",
        "Description": "PSU-POWER SUPPLY UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "30210",
        "Description": "ACCUMULATOR ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "VFT210B00",
        "Description": "SKIN AIR INLET VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "89794077",
        "Description": "CYLINDER ASSY-OXY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "89794050",
        "Description": "CYLINDER O2 GM (UN1072)",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "801307-00",
        "Description": "BOUTEILLE O2 GM (UN1072)",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "10-617980-1",
        "Description": "EXCITER - IGNITION UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "10-631045-2",
        "Description": "EXCITER - IGNITION",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "727-1155-02",
        "Description": "WING TIP NAVIGATION LIGHT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4307792",
        "Description": "MOTOR CONVERTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "96042-06",
        "Description": "ISOLATOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "96042-10",
        "Description": "ISOLATOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "8260-123",
        "Description": "STARTER GENERATOR",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "65C34812-7",
        "Description": "Flap Track",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "3291556-2",
        "Description": "VALVE-DUAL DISTRIBUTION",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "D22AA1043",
        "Description": "VALVE RETURN FUEL",
        "Condition": "OH",
        "Quantity": 1
      },
      {
        "PN": "Z010H000521A",
        "Description": "LIGHT-ANTICOLLISION",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1973773",
        "Description": "DETECTION UNIT-FIRE ENGIN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "126784-10",
        "Description": "CENTER DRIVE UNIT",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "2206400-2",
        "Description": "ACM",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "2206400-2",
        "Description": "ACM",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "2293B020000",
        "Description": "CHECK VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "2293B020000",
        "Description": "CHECK VALVE",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "2612312-1",
        "Description": "BRAKE",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "2-8041-1",
        "Description": "FUSE ASSY",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "28B263-13B",
        "Description": "AC GENERATOR",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "28B545-9",
        "Description": "APU GENERATOR",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "3022053-001",
        "Description": "PUMP",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "31075-440",
        "Description": "SERVO CONTROL",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "31075-840",
        "Description": "SERVO CONTROL",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "320548-2",
        "Description": "VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "3214446-4",
        "Description": "HIGH STAGE VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "3215394-8",
        "Description": "VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "3269264-28",
        "Description": "ACTUATOR",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "3282936-3",
        "Description": "GEARBOX",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "3289630-2",
        "Description": "VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "3289630-2",
        "Description": "VALVE",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "3291186-6",
        "Description": "VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "3291390-4",
        "Description": "VALVE",
        "Condition": "UNSRVCBL",
        "Quantity": 1
      },
      {
        "PN": "3291390-4",
        "Description": "VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "3291556-3",
        "Description": "STARTER CONTROL VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "329695-5",
        "Description": "VALVE",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "3505582-27",
        "Description": "STARTER",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "3505582-27",
        "Description": "STARTER",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "3505582-28",
        "Description": "STARTER",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "3505945-12",
        "Description": "STARTER",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "350880-7",
        "Description": "PUMP",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "35-0L0-1001-04",
        "Description": "PANEL",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "3732A010000",
        "Description": "PRECOOLER EXCHANGER",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "3790037-108",
        "Description": "NGS METERING VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "3790037-108",
        "Description": "NGS METERING VALVE",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "398786-5",
        "Description": "VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "398908-3",
        "Description": "VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "442369",
        "Description": "HMU",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "442554",
        "Description": "HMU",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "64141-580-1",
        "Description": "ALTIMETER",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "65C38058-24",
        "Description": "ACTUATOR",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "65C38058-24",
        "Description": "ACTUATOR",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "6740B050000",
        "Description": "OVERPRESSURE VALVE",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "6740E010000",
        "Description": "VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "6774E010000",
        "Description": "VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "71404-2",
        "Description": "DUAL BRAKE METERING VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "735511A",
        "Description": "CSD",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "745329F",
        "Description": "IDG",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "752168B",
        "Description": "IDG",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "761574B",
        "Description": "IDG",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "773289-15",
        "Description": "HIGH PRESSURE VALVE",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "790425A9",
        "Description": "PNEUMATIC STARTER",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "8061-536",
        "Description": "HMU",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "808556-1",
        "Description": "PRESSURE CHECK VALVE",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "88005B0306",
        "Description": "CABIN PRESSURE OUTFLOW VALVE",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "887055",
        "Description": "PUMP",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "8910-620",
        "Description": "AIR MODULATING VALVE",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "9043185-13",
        "Description": "IGNITION LEAD",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "9043185-13",
        "Description": "IGNITION LEAD",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "C20225510",
        "Description": "CARBON BRAKE",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "G6773-04",
        "Description": "PANEL",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "G6773-04",
        "Description": "PANEL",
        "Condition": "REPAIRABLE",
        "Quantity": 1
      },
      {
        "PN": "TC200-02",
        "Description": "ELECTRICAL LEAD ASSY",
        "Condition": "OVERHAULED",
        "Quantity": 1
      },
      {
        "PN": "RDAV9843-02",
        "Description": "10\"4 LCD LH MONITOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "066-50000-2120",
        "Description": "COMPUTER-TCAS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "759A0000-10",
        "Description": "CONTROLLER-PACK",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z220H0001110",
        "Description": "CONTROL UNIT-DRAIN MAST",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "RDAV1306-01",
        "Description": "DVD PLAYER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z130H0080110",
        "Description": "FORWARD ATTENDANT PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "465205-0502-0304",
        "Description": "GPSSU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "65B81133-5",
        "Description": "POWER UNIT ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "680203037A",
        "Description": "RAM AIR TURBINE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2510144-27-01",
        "Description": "SEAT CDB A320 (LH) MECA",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-1047-020",
        "Description": "VHF COM TRANSCEIVER,900B",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z050H8401A00",
        "Description": "CABIN ASSIGNMENT MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z121H0209111",
        "Description": "AAP-ADDITIONAL ATTENDANT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "926A0000-02",
        "Description": "ACTUATOR-ROTARY,SLAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "926B0000-01",
        "Description": "ACTUATOR-ROTARY,SLAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "753693",
        "Description": "ADAPTER-QAD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z121H0139110",
        "Description": "ADDITIONAL ATTENDANT PANE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z121H0160111",
        "Description": "ADDITIONAL ATTENDANT PANE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z121H0A21111",
        "Description": "ADDITIONAL ATTENDANT PANE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z121H0D85111",
        "Description": "ADDITIONAL ATTENDANT PANE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z121H0J10111",
        "Description": "ADDITIONAL ATTENDANT PANL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z121H0201111",
        "Description": "ADDITIONAL ATTENDANT PNL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z121H0G50111",
        "Description": "ADDITIONNAL ATTENDANT PAN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z121H0163111",
        "Description": "AFT ATTENDANT PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z121H0002110",
        "Description": "AFTER ATTENDANT PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z121H0056110",
        "Description": "AFTER ATTENDANT PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z121H0092110",
        "Description": "AFTER ATTENDANT PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2S7138",
        "Description": "APU CHECK VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3876135-2",
        "Description": "APU DELTA P SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "066-01127-1101",
        "Description": "ATC MODE S-TRANSPONDEUR",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "LA2L51720HM0100",
        "Description": "BATTERY CHARGE LIMITER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "LA2L51415HM0100",
        "Description": "BATTERY.CHARGE.LIMITER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z051H8401702",
        "Description": "CABIN ASSIGNMENT MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "LA2G007001A0000",
        "Description": "CENTRAL MAINTENANCE CPTR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z011H0000116",
        "Description": "CIDS-DIRECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1J516-11800-000",
        "Description": "CLEDU-CABIN LED UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9005000-11206",
        "Description": "COMPUTER-TCAS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "755CA02F",
        "Description": "CONTACTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "558CA04A31Y00",
        "Description": "CONTACTOR THREE POLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "559CA01Y1",
        "Description": "CONTACTOR THREE POLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "564CA04F11Y01",
        "Description": "CONTACTOR THREE POLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "179029-101",
        "Description": "CONTROLER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1618B0000-02",
        "Description": "CONTROLLER HEATER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "977B0000-01",
        "Description": "CONTROLLER-PACK TEMP.",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7125-19900-01AA",
        "Description": "CONTROLLER-PRESSURE,CABIN",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "330400-1M00",
        "Description": "CONTROL UNIT-THROTTLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z445H000080C",
        "Description": "CONVERTER-DATA FIRE EXTIN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "206PN01",
        "Description": "DC VOLTMETER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z033H0000110",
        "Description": "DECODER ENCODER UNIT A",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1982A0000-01",
        "Description": "DIFF PRESS TRANSDUCER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": 921000,
        "Description": "DIGITAL INTERFACE UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1333-500-100",
        "Description": "DIPLEXER LOW NOISE AMPLIF",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z013H000253A",
        "Description": "DIRECTOR-CIDS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "409GA01",
        "Description": "ECMU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "6331-19428-3",
        "Description": "ELECTRONIC BOX",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "967A0000-03",
        "Description": "EXCHANGER HEAT MAIN",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "72091-27D102",
        "Description": "FAUCET ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "ED43B1D7",
        "Description": "FDIU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "B12000",
        "Description": "FIRE SHUT OFF VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "B492AAM0411",
        "Description": "FLIGHT CONTROL SECONDARY",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "B490BAM0310",
        "Description": "FLIGHT MANAGE.GUIDANCE CO",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "B490CAM0308",
        "Description": "FLIGHT MGNT GUID.ENV.CPTR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "L87-13-003",
        "Description": "FLOAT VENT VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z131H0416114",
        "Description": "FORWARD ATTENDANT PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z131H0731116",
        "Description": "FORWARD ATTENDANT PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "42D395",
        "Description": "FUEL DIFF PRESS SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "B11A00",
        "Description": "FUEL ISOLATION VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "B97H51-604",
        "Description": "FUEL TRANSFER VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "697653001",
        "Description": "GEARBOX-DOWN DRIVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "697503001",
        "Description": "GEARBOX-DOWN DRIVE, A",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "697656001",
        "Description": "GEARBOX-INPUT,LH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "697657001",
        "Description": "GEARBOX-INPUT,LH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "697658001",
        "Description": "GEARBOX-INPUT,LH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "697661001",
        "Description": "GEARBOX-INPUT,RH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "697662001",
        "Description": "GEARBOX-INPUT,RH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "697660001",
        "Description": "GEARBOX-INPUT,RH\/LH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "697651001",
        "Description": "GEARBOX-RIGHT ANGLE",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "697651001",
        "Description": "GEARBOX-RIGHT ANGLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "705CA01",
        "Description": "GENERATOR LINE CONTACTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "5908975-15",
        "Description": "GROUND POWER CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "N40-1B20203-102",
        "Description": "HANDSET ASSY-CABIN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "N40-1B20203-000",
        "Description": "HANSDSET CABIN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z450H0021210",
        "Description": "HEAD AND SERVER UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "967A0000-01",
        "Description": "HEAT EXCHANGER - MAIN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "H341BVM",
        "Description": "HORIZON STANDBY INDICATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "600100-1",
        "Description": "HYDRAULIC DAMPER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "300-041-697",
        "Description": "ICE PROTECTION CONTROL UN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2041167-3709",
        "Description": "INTERROGATOR-DME",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "401100-3",
        "Description": "LATCH DOORSILL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "700-2061-002",
        "Description": "LCD MONITOR 8.6",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "003LG034C",
        "Description": "LGCIU",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "K428A3LGL001",
        "Description": "LIGHT ASSY LOGO",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2LA006724-00",
        "Description": "LIGHT WARNING RED",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "-264434",
        "Description": "MASTER CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z272H0000110",
        "Description": "MASTER CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z292H0000111",
        "Description": "MASTER CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z292H0000112",
        "Description": "MCU-MASTER CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "933252",
        "Description": "MOTOR HYDRAULIQUE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "20792-03AC",
        "Description": "OUTFLOW VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7012-17971-4",
        "Description": "OUTFLOW VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4313071-01-6600",
        "Description": "OVEN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8054-11-0000",
        "Description": "OVEN SINGLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "E3N543-25",
        "Description": "OXYGNE CONTAINER ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "TAE0528-1",
        "Description": "PAR 36 LED LAMP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "TAE0528-2",
        "Description": "PAR 36 LED LIGHT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z313H02AA017",
        "Description": "PASSENGER SERVICE UNIT",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "568-1-29684-001",
        "Description": "PLATE-MOUNTING ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4020Q8-3",
        "Description": "PRESSURE UNIT-AIR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "HAD20973",
        "Description": "PROBE THERMOCOUPLE T3",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "L95L90-601",
        "Description": "PROTECTOR-OVER PRESSURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "568-1-28405-001",
        "Description": "PUMP JET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3901340",
        "Description": "PUMP-JET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "42F1307",
        "Description": "RESERVOIR HYD,YELLOW",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "LA2E50700C40000",
        "Description": "SDAC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2158-1S1030AL",
        "Description": "SEAT-CAB ATTEND 1LH OUTBD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2201-2DL",
        "Description": "SEAT-CABIN ATTENDANT,UHC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "SC5300-4",
        "Description": "SERVOCONTROL-RUDDER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "C38661-002",
        "Description": "SERVO-INBD AILERON",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "38000-290",
        "Description": "SHUTOFF VALVE-MANUAL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "GAI2820-01",
        "Description": "SMOKE DETECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "GPA1101-00",
        "Description": "SMOKE DETECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9107A0009-02",
        "Description": "SOLENOID",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8202-10-0000-02",
        "Description": "STEAM OVEN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "S4-4500271",
        "Description": "STRUT-SPRING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "LA2E50700100000",
        "Description": "SYSTEM DATA ACQUISITION C",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "398B060000",
        "Description": "THERMOSTAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-4540-023",
        "Description": "TRANSCEIVER-DME,700",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "PC02001-01",
        "Description": "TRANSFORMER CURRENT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "APTE1771000160D",
        "Description": "TRANSMITTER OIL PRESSURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-2701-001",
        "Description": "TRIPLEXER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "766542",
        "Description": "TURBINE ASSY",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "DK100-90",
        "Description": "UNDERWATER LOCATOR BEACON",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "B97-51-601",
        "Description": "VALVE-FUEL, INLET",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "HTE900169",
        "Description": "VALVE-FUEL JETTISON",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "71035-3",
        "Description": "VALVE-PRIORITY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "B97H51-606",
        "Description": "VALVE-TRANSFER FUEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "VP1860C00",
        "Description": "VALVE-U FLOOR EXTRACT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1179-11-306-302",
        "Description": "VIDEO CAMERA MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0726-020",
        "Description": "VOR\/MARKER RECEIVER,700A",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z420H0202310",
        "Description": "WIRELESS LAN UNIT-NEW STD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "S65-5366-720",
        "Description": "WLAN L-BAND ANTENNA",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "71072A010001",
        "Description": "VALVE-OVERPRESSURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4307785",
        "Description": "MOTOR CONVERTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "RDAX4332-01",
        "Description": "SEAT ELECTRONIC BOX",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "RDAX2302-01",
        "Description": "WALL DISCONNECT BOX",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "15500-1051",
        "Description": "ACTUATOR-RETRACTION,CLG",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "D68397",
        "Description": "BEARING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "785-585-5",
        "Description": "BMC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2057-31420AL",
        "Description": "CABIN ATTENDANT SEAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2057-31440AL",
        "Description": "CABIN ATTENDANT SEAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2058-111201AL",
        "Description": "CABIN ATTENDANT SEAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2058-111243AL",
        "Description": "CABIN ATTENDANT SEAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2058-111443AL",
        "Description": "CABIN ATTENDANT SEAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "37100-1001",
        "Description": "CENTER LANDING GEAR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "12C22R212170000",
        "Description": "CONTAINER 2MASKS TYPE1",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "22C150150170001",
        "Description": "CONTAINER O2",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "96154566113X",
        "Description": "DISPLAY MANAGEMENT V113X",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "96154570113X",
        "Description": "DISPLAY MANAGEMENT V113X",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "271-201-011-501",
        "Description": "EIVMU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "LA2K1A1002D0000",
        "Description": "FLIGHT CTRL PRIM CPTER",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "LA2K1A1002D0000",
        "Description": "FLIGHT CTRL PRIM CPTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "B490AAM0317",
        "Description": "FLIGHT MNGT GUID ENV CMPT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z131H0531114",
        "Description": "FORWARD ATTENDANT PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "752157D",
        "Description": "INTEGRATED DRIVE GENERATR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "387B050000",
        "Description": "THERMOSTAT SOLENOID",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "10-118302-000",
        "Description": "BOGIE PITCH TRIMMER ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3735C020000",
        "Description": "EXCHANGER PRECOOLER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "87292337V04N04",
        "Description": "FLIGHT CNTRL DATA CONCTR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1604A0000-02",
        "Description": "REHEATER-CONDENSER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4A3931-003",
        "Description": "SLIDE OFF-WING 3LH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "AP41116101",
        "Description": "SOLID STATE FLIGHT DATA R",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z613H0000110",
        "Description": "ADAPTER MINI LIGHT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z454H000081A",
        "Description": "AIRLINE NETWORK ARCHI V2",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3506037-6",
        "Description": "AIR TURBINE STARTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "071-50001-8107",
        "Description": "ANTENNA-TCAS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1003660-5",
        "Description": "APU BLEED VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "96102-08",
        "Description": "APU ISOLATOR, FWD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "96102-11",
        "Description": "APU ISOLATOR, REAR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3900941-01",
        "Description": "APU PW980A",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2616221",
        "Description": "AXLE SLEEVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2616949",
        "Description": "AXLE SLEEVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2616559",
        "Description": "AXLE SLEEVE AFT AXLE BLG",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1A5000-130000-4",
        "Description": "BALLAST UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1B5000-131100-4",
        "Description": "BALLAST UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1B5000-131100-5",
        "Description": "BALLAST UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1A5000-130000-7",
        "Description": "BALLAST UNIT_SIBU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2144E5429-5",
        "Description": "BLG WEDGE LOCK SPRING AY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "DAP00021-05",
        "Description": "BRAKE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "DAP00021R5",
        "Description": "BRAKE ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z055H0001250",
        "Description": "CABIN ASSIGNMENT MODUL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z055H0001230",
        "Description": "CABIN ASSIGNMENT MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z055H0001240",
        "Description": "CABIN ASSIGNMENT MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2380HS3DAF21GA2",
        "Description": "CABIN ATTENDANT SEAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2380HS3EAF21GA2",
        "Description": "CABIN ATTENDANT SEAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2380TS3DAA21GA2",
        "Description": "CABIN ATTENDANT SEAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2382TD3EAA21GA2",
        "Description": "CABIN ATTENDANT SEAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2382TD3EAA25GA2",
        "Description": "CABIN ATTENDANT SEAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2383HR3AAB61GA3",
        "Description": "CABIN ATTENDANT SEAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2383TL3CAB51GA2",
        "Description": "CABIN ATTENDANT SEAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "96102-04",
        "Description": "CONEBOLT ASSY,REAR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "96102-10",
        "Description": "CONEBOLT ASSY,REAR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "DD1-08",
        "Description": "DEVICE DOOR DECELERATION",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4505915J",
        "Description": "ELECTRONIC CONTROL BOX",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1B5000-145100-7",
        "Description": "FLAT ILLUMINATION BALLAST",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1B5000-146100-7",
        "Description": "FLAT ILLUMINATION BALLAST",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3901255-10",
        "Description": "FUEL CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "44436",
        "Description": "HARNESS-1M,BOGIE ELECTRIC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "43724",
        "Description": "HARNESS 1M - SHOCK STRUT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "10-200901-005",
        "Description": "HARNESS 1M UPPER NLG",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "43570",
        "Description": "HARNESS-2M,BOGIE ELECTRIC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "44435",
        "Description": "HARNESS-2M,BOGIE ELECTRIC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "43653",
        "Description": "HARNESS-BTCM,ELECTRICAL B",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "C19628AD",
        "Description": "HCU-CAPT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "C19643AC",
        "Description": "HEAD UP COMBINIER UNIT FO",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "C19625AA",
        "Description": "HEAD UP PROJECTION UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "38000-610",
        "Description": "HEATER-WATER,POTABLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1B5000-131100-6",
        "Description": "HYBRID ILLUMINAT BALLAST",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1B5000-131100-7",
        "Description": "HYBRID ILLUMINAT BALLAST",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1B5000-141100-7",
        "Description": "HYBRID ILLUMINAT BALLAST",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1B5000-141100-4",
        "Description": "HYBRID ILLUMINATION BLLST",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1B5000-211100-4",
        "Description": "HYBRID ILLUMINATION BLLST",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3902764-01",
        "Description": "IGNITION EXCITER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3901228-05",
        "Description": "INLET GUIDE VANE ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "251TS10AHY03",
        "Description": "INTEGRATED CONTROL PNL 08",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z165H0184232",
        "Description": "IPRAM CF CARD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z165H0184239",
        "Description": "IPRAM CF CARD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z165H0184245",
        "Description": "IPRAM CF CARD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "490346-3",
        "Description": "KIT-SURVIVAL,FAA",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "300-041-472",
        "Description": "LIFT BELT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "30-2004277-00",
        "Description": "LOWER TORQUE LINK",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "AR4838-1",
        "Description": "PAD-KEY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2616522",
        "Description": "PIN BRAKE ROD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "0851HY1",
        "Description": "PROBE-PITOT,STANDBY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3901398-02",
        "Description": "SENSOR DELTA PRESSURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4952591",
        "Description": "SENSOR DELTA PRESSURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3901396-03",
        "Description": "SENSOR N1 SPEED",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3902396-01",
        "Description": "SENSOR-N2 SPEED",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3239518-2",
        "Description": "SENSOR-PROXIMITY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3901397-02",
        "Description": "SENSOR STATIC PRESSURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "0861HR2-23",
        "Description": "SIDE SLIP ANGLE PROBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "S3716-002",
        "Description": "STARTER APU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "0860J2",
        "Description": "STBY STATIC PROBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1003599-3",
        "Description": "SURGE CONTROL VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4952080",
        "Description": "SWITCH BYPASS IMPENDING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "D98C13-604",
        "Description": "SWITCH-PRESSURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "L5758415400400",
        "Description": "TAIL ASSY-CONE,4 LH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "L5758415400500",
        "Description": "TAIL ASSY-CONE,4 RH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3220005WV067",
        "Description": "TRASH COMPACTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2144A5589-1",
        "Description": "UNLOCK ACT BRACKET PIN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2143A5501-1",
        "Description": "UNLOCK ACT SIDESTAY PIN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2144A5455-4",
        "Description": "WEDGE TO SPRING PIN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A2727114900000",
        "Description": "ROD ASSY-SPRING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "348-200",
        "Description": "AIR CHILLER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "F5311061200743",
        "Description": "COULISSANT RH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "MXP402",
        "Description": "ASSY-STOWAGE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "60-98976-4",
        "Description": "BOOST PUMP MOTOR IMP ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-8591-100",
        "Description": "DISPLAY SELECT PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3170120-7",
        "Description": "INB AIL CONT PACK",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "161U0056-1",
        "Description": "INNER CYLINDER 913",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "65B01540-19",
        "Description": "LEFT DOWN LOCK ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "0861DR",
        "Description": "PROBE ANGLE OF ATTACK",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7A1467-17",
        "Description": "SLIDE RAFT DOOR 1 LH",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "271T0042-4",
        "Description": "ACMP PRESS FLTR MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "AD8650502",
        "Description": "ACTUATOR HORIZONTAL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4075200-901",
        "Description": "CABINET AIMS 777-200",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "810503-6",
        "Description": "CONTROLLER-ANTI ICE,ENG.",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "810200-3",
        "Description": "CONTROLLER-TEMP CABINE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "233W3215-6",
        "Description": "CVR SWITCH MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "30830",
        "Description": "CYLINDER HYD ACCU TRANSF",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3204908-5",
        "Description": "EQT COOLING OVERRIDE VLVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "07125P000-03",
        "Description": "FLAP BALLSCREW 2\/7",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "71756",
        "Description": "FLAP\/SLAT PRIORITY VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "964-0452-011",
        "Description": "HF TRANSCEIVER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "135W1870-1",
        "Description": "INTERMEDIATE GEARBOX",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "ELM803-2-1",
        "Description": "I\/O CARD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "MF10-05-15",
        "Description": "MASK-OXYGEN,FULL FACE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "293W3702-6",
        "Description": "MLG DOOR ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "293W3702-8",
        "Description": "MLG DOOR ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "99C55203-111",
        "Description": "MLG DRAG BRACE OP SEQ VLV",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "161W1166-1",
        "Description": "MLG REACTION LINK AY 660",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "233W7201-12",
        "Description": "MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "233W7201-6",
        "Description": "MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1153154-7",
        "Description": "NGS CONTROLLER",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "256W2210-3",
        "Description": "OTB SLAT ROTARY ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "256W2210-4",
        "Description": "OTB SLAT ROTARY ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "85000-001",
        "Description": "PORTABLE MAINT.ACC.TERMNL",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "60-4983-3",
        "Description": "PWR SUPLY",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "PC6033-3-55",
        "Description": "QAR-QUICK ACCESS RECORDER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "ELM1312-1",
        "Description": "SIGNAL COND A+B CARD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "251W4110-8",
        "Description": "STAB TRIM ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2704474-5",
        "Description": "VALVE CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "08450-0027-0001",
        "Description": "WALL DISPLAY BRACKET ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "60944-1",
        "Description": "ANTISKID ACCU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2113-751NH",
        "Description": "ATTENDANT SEAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "066-50000-2721",
        "Description": "COMPUTER TCAS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "16D1004",
        "Description": "DRAIN VALVE",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "3145968BA",
        "Description": "ETHENET CABIN TELECOM UN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "77FE100-4",
        "Description": "LH LCP WITH ROTATION",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "83-107-01",
        "Description": "MLG WIU ADAPTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7000-5013B00",
        "Description": "NETWORK FILE SERVER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "474560-52",
        "Description": "SMOKE DETECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "256W3210-10",
        "Description": "TE FLAP TRANSMISSION ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3145286CA0301",
        "Description": "TELEPHONE SEAT BOX",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "MA30A1001",
        "Description": "ACTUATOR ELECTRIC MOTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "MA30A1001",
        "Description": "ACTUATOR ELECTRIC MOTOR",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "AD8650603",
        "Description": "ACTUATOR VERTICAL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-0407-101",
        "Description": "BACKDRIVE ACTUATOR",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "1-002-0102-2031",
        "Description": "CONVERTER FREQUENCY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3930021-105",
        "Description": "FLAP PRIMARY CTL VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1012831-2",
        "Description": "MN DK SHUTOFF VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "066-50029-1101",
        "Description": "MULTI MODE RECEIVER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "233W3219-2",
        "Description": "PASSENGER CABIN SYSTEM",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "372-079-003",
        "Description": "STAB TRIM POS INDICATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "066-01127-1602",
        "Description": "TRANSPONDER MODE S",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "622-5136-202",
        "Description": "WEATHER RADAR DRIVE UNIT",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "810601-2",
        "Description": "WING ANTI ICE VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-5130-205",
        "Description": "WRCP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-1338-021",
        "Description": "ATC TRANSPONDER",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "Z233H0010110",
        "Description": "BOX-CONNECTING,DEU A",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "APE5100",
        "Description": "CLOCK",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "93A100-80",
        "Description": "COCKPIT VOICE RECORDER",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "63543-253-3",
        "Description": "DDRMI",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "8001-06-0000",
        "Description": "FOUR SELL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "TLS755-01-0102A",
        "Description": "NAVIGATEUR MULTI MODE REC",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "72067000",
        "Description": "OVEN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8201-11-0000",
        "Description": "OVEN",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "C12848AA01",
        "Description": "RADIO MANAGEMENT PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "622-8973-104",
        "Description": "TCAS DIRECT ANTENNA",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "RDAV1216-01",
        "Description": "VIDEO TAPE REPRODUCER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2041444-0404",
        "Description": "WEATHER RADAR ANTENNA MOU",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "A06L00",
        "Description": "ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z220H0002110",
        "Description": "CONTROL UNIT - DRAIN MAST",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "0851MC",
        "Description": "PITOT PROBE",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "830A0000-03",
        "Description": "ACTUATOR-ROTARY,SLAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8410B5-4-90",
        "Description": "CAMERA-AREA",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "600611-00-601",
        "Description": "CONTROLLER-HEAT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "201419001-020",
        "Description": "DAMPER UNIT",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "60128-103",
        "Description": "SURVIVAL KIT",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "22C150150170004",
        "Description": "CONTAINER MASK EMER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "P78147",
        "Description": "GENERATEUR SICMA BI",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "6610-20565-01",
        "Description": "ACTUATOR ROTARY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z121H0D01111",
        "Description": "ADDITIONAL ATTENDANT PANL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "5600-2C1AF23AM",
        "Description": "BOUTEILLE O2 PORTABLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z011H0000114",
        "Description": "CIDS-DIRECTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "F5528000000700",
        "Description": "ELEVATOR ASSY RH",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "-292161",
        "Description": "ENHANCED MASTER CTRL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "CE1716AA0",
        "Description": "FAN-GROUND COOLING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3711-00",
        "Description": "FIRE DETECTION UNIT",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "924C0000-01",
        "Description": "GEARBOX-BEVEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9028A0005-01",
        "Description": "POSITION PICK-OFF UNIT",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "L95F89-602",
        "Description": "PROTECTOR-OVERPRESSURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "055-021-001",
        "Description": "SENSOR-TEMPERATURE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1671220-00",
        "Description": "SIEGE 4EME OCC A330\/A340",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "SC4710",
        "Description": "YAW DAMPER SERVO ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1070B0000-02",
        "Description": "ACTUATOR-FLAP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z120H0056111",
        "Description": "ADDITIONAL ATTENDANT PNL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "PG1152AC03",
        "Description": "AIR DATA MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "913004",
        "Description": "AIRSHOW CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z111H0036151",
        "Description": "ATTENDANT INDICATION PNL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "64761-001-003",
        "Description": "BEVERAGE MAKER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z212H0001110",
        "Description": "BOITE DE PROTECTION",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z054H0001230",
        "Description": "CABIN ASSIGNMENT MODULE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "B401ACM0507",
        "Description": "CENTRAL FAULT DATA INT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "655CC04A0Y00",
        "Description": "CONTACTOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "630CC04A0Y00",
        "Description": "CONTACTOR SINGLE POLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "564CA04A01Y00",
        "Description": "CONTACTOR THREE POLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "564CA04A11Y00",
        "Description": "CONTACTOR THREE POLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "564CA04F10Y00",
        "Description": "CONTACTOR THREE POLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "AH5702-60",
        "Description": "CONTAINER 02",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "9022-15702-10",
        "Description": "CONTROLLER-PRESSURE,CABIN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "14404-011B",
        "Description": "CONTROLLER-VACCUM SYSTEM",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "14404-011",
        "Description": "CONTROLLER VACUUM SYSTEM",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "14404-011-1",
        "Description": "CONTROLLER VACUUM SYSTEM",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "G6990-42",
        "Description": "CONTROL PANEL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "DN17TYC3YS30071",
        "Description": "CREWSEAT PNC",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "9615325060",
        "Description": "DISPLAY MANAGEMENT COMPUT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "6331-16639-5",
        "Description": "ELECTRONIC BOX",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "241-191-000-031",
        "Description": "EVMU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "241-191-000-041",
        "Description": "EVMU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "B546CAM0104",
        "Description": "FLIGHT MANGMNT.GUID.CPTR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "C13042AA07",
        "Description": "FLIGHT MANGMNT.GUID.CPTR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "788A0000-01",
        "Description": "GEARBOX-RIGHT ANGLE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "066-50006-1202",
        "Description": "ILS RECEIVER, RIA35B",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2041230-3532",
        "Description": "ILS RIA 35A",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "4950488",
        "Description": "LOP SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "C24840010",
        "Description": "MANIF ALTERNATE BRAKE RH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "S4-3500712",
        "Description": "MANIFOLD GROUND SERVICE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "174690M7",
        "Description": "MASK OXYGEN FULL FACE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z312H01N5803",
        "Description": "PASSENGER SERVICE UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "341E030000",
        "Description": "THERMOSTAT SOLENOID",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "8TJ124GGR1",
        "Description": "TRANSMITTER FUEL FLOW 12",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "C24730100",
        "Description": "UPLOCK ASSY NLG DOOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "C24730100",
        "Description": "UPLOCK ASSY NLG DOOR",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "201117006",
        "Description": "UPLOCK MLG RH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "SAS911-002A",
        "Description": "VALVE ANTI ICE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "324195-1",
        "Description": "VALVE-ANTI ICE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "769A0000-02",
        "Description": "VALVE-CHECK",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "9815715",
        "Description": "VALVE_PRESS RELIEF",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "114079016",
        "Description": "VALVE SELECTOR DOOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "114083003",
        "Description": "VALVE VENT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1010099-6",
        "Description": "WATER BOILER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1010099-6-2",
        "Description": "WATER BOILER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "24E507009G01",
        "Description": "WATER HEATER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8210-093",
        "Description": "PUMP OIL OVERSPEED GOVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "95072-04",
        "Description": "SHOCKMOUNT-FWD LATERAL",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2940",
        "Description": "ACTUATOR-FUEL CROS.VALVE",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "7000700-951",
        "Description": "AIR DATA COMPUTER 1",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "7003360-946",
        "Description": "ATT. HEADING REF.UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "30100022-4",
        "Description": "EXTINGUISHER-AUTOMATIC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "36045182A13",
        "Description": "FLIGHT DATA ACQ UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "JP2579",
        "Description": "JACK PANEL-HAND MIKE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "LA4E20608HM0100",
        "Description": "MULTI FONCTION COMPUTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "822-1468-202",
        "Description": "TRANSCEIVER-VHF",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2095E020800",
        "Description": "VALVE-ELECTRO PNEUMATIC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "170-70510-001",
        "Description": "PIN T.L APEX",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "321-400-502-0",
        "Description": "STOW SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8TW32BAA2",
        "Description": "T1.2 SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1459M55P32",
        "Description": "ELECTRONIC CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "321-400-501-0",
        "Description": "STOW SWITCH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "AC69576",
        "Description": "VALVE SOLENOID STG 10 BLE",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "6730B01",
        "Description": "FAN AIR VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2547000-2",
        "Description": "ACTUATOR HYDRAULIC DOOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1084000-4",
        "Description": "CONTROL UNIT HYDRAULIC",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1799M98P14",
        "Description": "ELECTRONIC CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1851M42P11",
        "Description": "ELECTRONIC CONTROL UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "340-4000-517",
        "Description": "EXHAUST NOZZLE",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "0711480-001",
        "Description": "SHUT OFF VALVE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "6754D010000",
        "Description": "VALVE-PRESSURE REGULATING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "6753D010000",
        "Description": "VALVE-REGULATING HP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3290064-30",
        "Description": "VALVE-STARTER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2045M10P04",
        "Description": "VIB MONITORING UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "928005",
        "Description": "GENERATOR CONTROL UNIT",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "822-0953-001",
        "Description": "AMPLIFIER POWER SATCOM",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "PAS3921AB02",
        "Description": "DIGIT PLAYER ANNUNCIATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "D5537005000400",
        "Description": "TIP VERTICAL STABILIZER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "37266-101",
        "Description": "HARNESS ASSY 2M",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A2-254-0006-10",
        "Description": "MIROIR TOILETTES L61 L62",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "AGAF9-616500-02",
        "Description": "PORTE SIMPLE GALLEY G6G7",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A325438470-504",
        "Description": "SCHROUD LAVATORY V",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1380201-2",
        "Description": "AGU WIRING HARNESS",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "43607",
        "Description": "HARNESS-2M,SHOCK STRUT RH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A805100-11",
        "Description": "SPLITTER ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A800505-1",
        "Description": "STOP-END,XZ",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "37265-101",
        "Description": "HARNESS ASSY 1M",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A325400289-944",
        "Description": "TOILET DOOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "65B18248-1",
        "Description": "TUBE BLG",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "417U3060-13620",
        "Description": "BOX ASSY OXYGENE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "152020-1-20E",
        "Description": "COUPLING",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "30-0408-3",
        "Description": "EMERGENCY EXIT LIGHT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "65B08505-6",
        "Description": "HINGE FTG AY-SWINGING RH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "65B17175-2",
        "Description": "SPRING AY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "701284",
        "Description": "STROBE LIGHT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "285W0030-1",
        "Description": "AMBIENT NOISE SENSOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "903-1341",
        "Description": "MICRO A MAIN PRISE JACK",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "A800100-3",
        "Description": "EXTINGUISHER ASSY OLD STD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "22C220210080004",
        "Description": "CONTAINER 2MASKS TYPE2",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "F5735322900100",
        "Description": "TRAILING EDGE RH",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "238W0967-501",
        "Description": "HARNESS INTERPHONE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2547033-1",
        "Description": "ROD PISTON",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "65-46100-78",
        "Description": "MAIN LANDING GEAR ASSY",
        "Condition": "UN",
        "Quantity": 1
      },
      {
        "PN": "201524001-010",
        "Description": "LH MLG SIDESTAY",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "201524002-010",
        "Description": "RH MLG SIDESTAY",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "201523001-020",
        "Description": "LH MLG A321",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "D23589520-11",
        "Description": "NLG LEG ASSY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "201524001-010",
        "Description": "LH MLG SIDESTAY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "201524002-010",
        "Description": "RH MLG SIDESTAY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "D23596000-2",
        "Description": "NLG FORESTAY",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "201523002-020",
        "Description": "RH MLG A321",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "D3215600500400",
        "Description": "AFT PINTLE PIN",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "D22698172-107",
        "Description": "NOSE LANDING GEAR",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "D22703072-1",
        "Description": "DRAG BRACE NLG",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "D23189000-21",
        "Description": "LEG ASSEMBLY L\/H",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "D23190000-21",
        "Description": "TEG ASSEMBLY RH",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "D231175001-12",
        "Description": "NOSE LANDING GEAR",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "114193007",
        "Description": "MLG ACTUATOR",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "201375009-020",
        "Description": "MLG L\/H LEG ASSY",
        "Condition": "UN",
        "Quantity": 1
      },
      {
        "PN": "201375010-020",
        "Description": "MLG R\/H LEG ASSY",
        "Condition": "UN",
        "Quantity": 1
      },
      {
        "PN": "D23175005-8",
        "Description": "NLG LEG ASSY",
        "Condition": "UN",
        "Quantity": 1
      },
      {
        "PN": "201375007-040",
        "Description": "LH MAIN LANDING GEAR",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "201375008-040",
        "Description": "R\/H MLG & DRESSING",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "D3215303000400",
        "Description": "AFT PINTLE PIN",
        "Condition": "AR",
        "Quantity": 1
      },
      {
        "PN": "D32153030008000",
        "Description": "AFT RH PINTLE PIN",
        "Condition": "AR",
        "Quantity": 1
      },

      {
        "PN": "3039609",
        "Description": "IGNITION EXCITER",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "30210",
        "Description": "HYDRAULIC ACCUMULATOR",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "734374D",
        "Description": "Acuator",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "6763C080000",
        "Description": "VALVE-BLEED HP",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "96042-10",
        "Description": "BARRY- CONTROLE FORWARD ISOLA",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "3039609",
        "Description": "DUAL IGNITER",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "15801-040",
        "Description": "Flush Control Unit \/ FCU",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "22715-000-02",
        "Description": "Door Actuator Cylinder",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "979786-5",
        "Description": "VALVE SHUT-OFF",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "CT141-1",
        "Description": "VALVE CHECK",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "TLS755-01-0102A",
        "Description": "MMR RECEIVER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "35-0L0-1001-04",
        "Description": "ECP-ECAM CONTROL PANEL",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "7021479-2",
        "Description": "ANTENNA",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "064-50000-2051",
        "Description": "VHF Comunication Transciever",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "1803B0000-02",
        "Description": "Air condition System Controller",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "1809A0000-01",
        "Description": "Ram Air INLET Acuator",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "30100022-8",
        "Description": "BOTTLE FIRE EXTINGUISHER LAVARATORY",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "350E55002",
        "Description": "SDAC",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "3888394-210103",
        "Description": "ELECTRONIC CONTROL BOX",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "E21327006",
        "Description": "Brake & Steering Control unit",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "1809A0000-01",
        "Description": "Ram Air Acuator Assy",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "3214-31",
        "Description": "Battery",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "810221-2",
        "Description": "Zone Trim Modulating Valve",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z312H2100110",
        "Description": "PISA MAIN PC BOARD",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "201479001-010",
        "Description": "Adjustable Link",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "2015G2H-8",
        "Description": "PROBE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "TLS755-01-0101B",
        "Description": "MMR RECEIVER",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "2936",
        "Description": "FUAL LP VALVE",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "10-631045-2",
        "Description": "Ignition Exciter",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "8ES005045-00",
        "Description": "Power Supply Unit",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "GMT4190-020",
        "Description": "Electronic Clock",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "218066-3",
        "Description": "APU FUEL PUMP",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "664700500A4D",
        "Description": "CTL INRWEFACE UNIT LDG",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "9031-16243-B5",
        "Description": "Data Management Unit",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "01\/02\/7304",
        "Description": "Fire Detector Unit",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "792-669H-001",
        "Description": "VERTICAL GYRO",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "D97C00-664",
        "Description": "SINGLE MOTOR ACTUATOR",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "VFT210B00",
        "Description": "Valve SKIN AIR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2234320-01-01",
        "Description": "FDIMU - FLIGHT DATA UNIT INT",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "811A0200-03",
        "Description": "BEARING ROD END",
        "Condition": "NEW",
        "Quantity": 1
      },
      {
        "PN": "6774G010000",
        "Description": "PRESSURE REGULATING VALVE",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "4082730-911",
        "Description": "Control Panel EFIS",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "C24837102-2",
        "Description": "Manifold Assy",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "960442-7",
        "Description": "Hydraulic Reservoir Assy",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "AMU4031SA130103",
        "Description": "Audio Management Unit",
        "Condition": "Tested",
        "Quantity": 1
      },
      {
        "PN": "TY2013-10",
        "Description": "CONTROL ASSY",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "822-1821-330",
        "Description": "RECEIVER",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "AC69572",
        "Description": "STG 7 BLEED CONTROL",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "746A0000-06",
        "Description": "Valve-Air Trim",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "746A0000-06",
        "Description": "Valve-Trim Air Pressure Valve,",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "96042-08",
        "Description": "Engine Mount Assy",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "3945128218",
        "Description": "ELAC",
        "Condition": "Tested",
        "Quantity": 1
      },
      {
        "PN": "C19266AA01",
        "Description": "Control, MCDU",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "Z312H2000110",
        "Description": "PISA",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "940-0351-005",
        "Description": "ComputeR TCAS TPA-100B",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "A25461020-2",
        "Description": "Selector Brake",
        "Condition": "Tested",
        "Quantity": 1
      },
      {
        "PN": "3291556-2",
        "Description": "Starter",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "Z133H052151D",
        "Description": "FAP",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "940-0300-001",
        "Description": "COMPUTER TCAS TPA-100A",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "AMU4031LA130103",
        "Description": "Audio Management Unit",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "397B030000",
        "Description": "Solenoid thermostat",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "96042-06",
        "Description": "Engine Mount Assy",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "C24837102-2",
        "Description": "Brake Manifold Assy",
        "Condition": "Tested",
        "Quantity": 1
      },
      {
        "PN": "822-1287-120",
        "Description": "Transceiver-VHF",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "241-246-022-004",
        "Description": "EVMU",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "D22AA1043",
        "Description": "Fuel Return Valve",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "6730F010000",
        "Description": "FAN AIR VALV",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "2612312-1",
        "Description": "BRAKE ASSY",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "15800-356",
        "Description": "Armature Assy",
        "Condition": "Tested",
        "Quantity": 1
      },
      {
        "PN": "201582001",
        "Description": "MLG L.H",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "201582002",
        "Description": "MLG R.H",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "D23589520-12",
        "Description": "NLG",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "642-3802-523",
        "Description": "FAN REVERSER RH",
        "Condition": "OVH",
        "Quantity": 2
      },
      {
        "PN": "642-3801-521",
        "Description": "FAN REVERSER LH",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "766352B",
        "Description": "RAT",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "8862-101",
        "Description": "FIRE\/OVERHEAT INDICATOR",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "6764B040000",
        "Description": "Valve Bleed",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "7008471-668",
        "Description": "RADAR CONTROL PANEL",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "642-2000-15",
        "Description": "FWD ENGINE MOUNT",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "DV8456701-5",
        "Description": "TRAVEL LIMITION UNIT",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "1211313-010",
        "Description": "ACTUATOR VSV",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "114079018",
        "Description": "Valve Selector",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "4000833-0207",
        "Description": "Radar Indicator",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "D24001000",
        "Description": "VALVE-CONTROL, PARKING BRAKE ELECTRICAL,",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1567700-3",
        "Description": "Control Unit Assy",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "066-50008-0409",
        "Description": "TRANSCEIVER-WEATHER RADAR",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "3945129100",
        "Description": "ELAC",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "398908-3",
        "Description": "VALVE-TRIM MODULATING",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "VFT210B00",
        "Description": "Skin air valve",
        "Condition": "SV",
        "Quantity": 2
      },
      {
        "PN": "C19755BA01",
        "Description": "LCDU",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "2LA003968-00",
        "Description": "LIGHT-ANTICOLLISION,BEACON",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "DV8456701-5",
        "Description": "TRAVEL LIMITATION UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "979142-6-1",
        "Description": "VALVE SHUTOFF",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "342B050000",
        "Description": "THERMOSTAT-CONTROL",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "C19298AF05",
        "Description": "LCDU",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "TLS755-01-0102A",
        "Description": "MMR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "114095004",
        "Description": "LOCK-STAY ACTUATOR",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "51154-04",
        "Description": "Pump Assy",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "AR4726-5",
        "Description": "FLT DECK DOOR STRIKER",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "51154-04",
        "Description": "Electric Hyd. Pump",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "C24839010",
        "Description": "MANIFOLD ALTER.BRAKE",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "Z133H031151A",
        "Description": "FAP",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "822-1465-001",
        "Description": "VOR ILS TRANSCEIVER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "8202-61-0000",
        "Description": "OVEN",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "C19736AA01",
        "Description": "INTEGRATED AVIONICS DISPLAY UNIT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "6764B040000",
        "Description": "Valve Bleed",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "PPC1200-00",
        "Description": "Smoke Detector",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "40997003",
        "Description": "OZONE CONVERTER",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "8260-123",
        "Description": "Starter",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "20032-2",
        "Description": "Alternator",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "822-0297-020",
        "Description": "ADF RECEIVER",
        "Condition": "Repaired",
        "Quantity": 1
      },
      {
        "PN": "FE240-004",
        "Description": "DOOR DAMPER CYLINDER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "642-2000-25",
        "Description": "FWD ENGINE MOUNT",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "3732A010000",
        "Description": "PRECOOLER",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "1706903",
        "Description": "IDG",
        "Condition": "SV",
        "Quantity": 1
      },
      {
        "PN": "64356-101",
        "Description": "MAN LIFE RAFT",
        "Condition": "US",
        "Quantity": 1
      },
      {
        "PN": "772292",
        "Description": "IDG",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "96042-10",
        "Description": "Engine Mount Assy",
        "Condition": "OVH",
        "Quantity": 1
      },
      {
        "PN": "C49007-42",
        "Description": "Sling Equipment",
        "Condition": "NEW",
        "Quantity": 1
      },
      {
        "PN": "145-22683-401",
        "Description": "COVER ASSY (PANEL BLEED VALVE)",
        "Condition": "NEW",
        "Quantity": 1
      },
      {
        "PN": "7014300-901",
        "Description": "DISPLAY",
        "Condition": "SV",
        "Quantity": 1
      }
    ];
  }
  }
