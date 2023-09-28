import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
 stockList:any;
  constructor() {
    this.stockList=  [
      {
        partNumber: "0123FA2",
        description: "FLOW SYSTEM CALIBRATOR SENSOR",
        conditionCode: "SV",
        quantity: 4,
        uoM: "EA"
      },
      {
        partNumber: "019-012-001",
        description: "XMTR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "024147-000",
        description: "BATTERY MAIN - M6",
        conditionCode: "OH",
        quantity: 2,
        uoM: "EA"
      },
      {
        partNumber: "332220490",
        description: "WASHER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "332220850",
        description: "WASHER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "332220960",
        description: "SUPPORT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "332220970",
        description: "TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "332221380",
        description: "INLET GUIDE VANE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "332221390",
        description: "INLET GUIDE VANE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "332222220",
        description: "INLET GUIDE VAN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "332222410",
        description: "NUT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "332227310",
        description: "SUPPORT ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "332227330",
        description: "CONTROL ROD ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "332260140",
        description: "RING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "332267150",
        description: "SUPPORT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "332267330",
        description: "BRACKET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "332400270",
        description: "NUT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "332400380",
        description: "SPACER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "045-250-025",
        description: "BOOMSET",
        conditionCode: "SV",
        quantity: 2,
        uoM: "EA"
      },
      {
        partNumber: "045-250-025",
        description: "BOOMSET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "064-50000-2000",
        description: "VHF DATA RADIO",
        conditionCode: "SV",
        quantity: 3,
        uoM: "EA"
      },
      {
        partNumber: "064-50000-2000",
        description: "VHF DATA RADIO",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "064-50000-2000",
        description: "VHF DATA RADIO",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "064-50002-0101",
        description: "8.33 VHF COMM, ARINC",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-01127-1101",
        description: "TRA 67A ATC TRANSPONDER, MODE 'S'",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-01127-1101",
        description: "TRA 67A ATC TRANSPONDER, MODE 'S'",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-01127-1101",
        description: "TRA 67A ATC TRANSPONDER, MODE 'S'",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-01127-1301",
        description: "TRANSPONDER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-01127-1301",
        description: "TRANSPONDER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-01127-1602",
        description: "TRANSPONDER MODE S",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50008-0405",
        description: "TRANSCEIVER-WX RADAR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50008-0405",
        description: "TRANSCEIVER-WX RADAR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50008-0405",
        description: "TRANSCEIVER-WX RADAR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50008-0406",
        description: "RADAR TRANSCEIVER RTA-4B",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50014-0101",
        description: "RCVR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "066-50029-1101",
        description: "MULTI-MODE RCVR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "071-50001-8102",
        description: "ANTENNA, TCAS DIRECTIONAL",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "071-50001-8102",
        description: "ANTENNA, TCAS DIRECTIONAL",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "080-20325-01",
        description: "TRANSFORMER, RECTIFIER 50 AMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "0871DP4",
        description: "DETECTOR, ICE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "0871DP4",
        description: "DETECTOR, ICE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "088259-04644",
        description: "ACCUMULATOR POWER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1001002-2",
        description: "RADOME, ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-1004-2",
        description: "SIGN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-1004-2",
        description: "SIGN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-1004-2",
        description: "SIGN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-1004-2",
        description: "SIGN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-1004-2",
        description: "SIGN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-1004-2",
        description: "SIGN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-1004-2",
        description: "SIGN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-1004-3",
        description: "SIGN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "101651-303",
        description: "SlideRaft RHLH FWDAFT B767",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "103642-3",
        description: "VALVE-PRESSURE RELIEF",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "103642-3",
        description: "VALVE-PRESSURE RELIEF",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-60450-1",
        description: "RELAY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-60450-1",
        description: "RELAY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "106-1-1100-02",
        description: "ACTUATOR - APU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "106-1-1100-02",
        description: "ACTUATOR - APU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-621630-1",
        description: "EXCITER IGNITION (CL'A')",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-631045-3",
        description: "IGNITION EXCITER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-631045-3",
        description: "IGNITION EXCITER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-631045-3",
        description: "IGNITION EXCITER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "10-631045-3",
        description: "IGNITION EXCITER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "107492-6",
        description: "REGULATOR-BLEED AIR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1091A0000-01",
        description: "INJECTOR WATER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "109382-36-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "109382-36-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "109382-36-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "109382-36-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "109382-36-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "109382-36-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "109382-36-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "109382-36-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "109382-36-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "109382-36-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1103070-120",
        description: "DECODER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1103070-120",
        description: "DECODER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1106-3AB",
        description: "OBSERVER SEAT - RH",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1111A0000-01",
        description: "32 SOLENOID VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "11197-5",
        description: "DETECTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "11197-5",
        description: "DETECTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "112T4607-5",
        description: "DOOR ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "113A1150-1",
        description: "FITTING ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "113A1150-2",
        description: "FITTING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "113A2610-2",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "113A4300-2",
        description: "SPOILER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "113A4600-1",
        description: "Spoiler Assy NO 6",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "113A9104-1",
        description: "BEAM ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "113A9365-4",
        description: "ACCESS COVER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "113T1249-1",
        description: "ROD ASSY.",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "113T2276-1",
        description: "TRACK ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "113T3144-11",
        description: "DOOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "113T3144-3",
        description: "FLAP FOOTBALL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1140-0110-34",
        description: "STICK AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1140-0183-6",
        description: "STICK AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1140-0183-6",
        description: "STICK AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1140-0183-6",
        description: "STICK AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "114079017",
        description: "VALVE-SELECTOR,GEAR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "114079017",
        description: "VALVE-SELECTOR,GEAR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "114087006",
        description: "VALVE BY PASS DOOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "114095004",
        description: "A320 LOCK STAY ACTUA",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "114122014",
        description: "ACTUATOR, DOOR, MLG",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "114A7531-201",
        description: "SLAT TRACK #3 OR #6 0B",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "114A7542-201",
        description: "TRACK ASSY, #4 OR #5 IB",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "114A7542-5",
        description: "TRACK AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "114T0202-104",
        description: "DOOR ASSY-SLAT TRACK RH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1150002-1",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1150002-1",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1150250-1",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1150250-1",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1150980-2",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1150980-2",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1151864-1",
        description: "CONTRLLR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1158000-21",
        description: "VALVE-REFUEL",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "115A2710-17",
        description: "PANEL ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "115A2950-81",
        description: "TURNBUCKLE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "116941-5",
        description: "HEATER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1173T211",
        description: "SWITCH, OVERHEAT SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1173T211",
        description: "SWITCH, OVERHEAT SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1173T211",
        description: "SWITCH, OVERHEAT SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1173T211",
        description: "SWITCH, OVERHEAT SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "11-811538-1",
        description: "PRECOOLER EXCHANGER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "121664-8",
        description: "ACTUATOR-BALLSCREW",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "121666-13",
        description: "ACTUATOR-BALLSCREW MASTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "125329B-4",
        description: "ADAPTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "125329B-4",
        description: "ADAPTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "125329B-4",
        description: "ADAPTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "125329B-4",
        description: "ADAPTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "125329B-4",
        description: "ADAPTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "125329B-4",
        description: "ADAPTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "125329B-4",
        description: "ADAPTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "125334D-2",
        description: "FUEL VALVE BODY ASSY - LH TANK",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1267-501",
        description: "LIGHT ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1303153-101",
        description: "LCD MONITOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1303910-101",
        description: "MONITOR, RETRACTOR, LCD-10.4 INCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1303910-101",
        description: "MONITOR, RETRACTOR, LCD-10.4 INCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1303A0000-04",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1303A0000-04",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1303A0000-04",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1318M50G03",
        description: "LINK-CONNECTING ACTUATION RING IGV",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1319M17P02",
        description: "SEAL-ROTATING HPT REAR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1320A0000-02",
        description: "VALVE, TRIM AIR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1320A0000-02",
        description: "VALVE, TRIM AIR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1320A0000-02",
        description: "VALVE, TRIM AIR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1385M33G03",
        description: "ARM ASSY-VANE ACTUATION CPRSR STTR STG 1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "13TX-0115-A",
        description: "SURFACE POSITION XMTR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "140-025-1",
        description: "TRANSDUCER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "140-025-1",
        description: "TRANSDUCER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "140-025-2",
        description: "TRANSDUCER ASSY, WHEEL SPEED",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "141A4800-2",
        description: "WINDSHIELD ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "141A5810-121",
        description: "PANEL ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "142-147",
        description: "ANTISKIDAUTOBRAKE CONTROL UNIT - HYTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "14220-316",
        description: "RING, FLUSH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "14330-085-2",
        description: "SPACER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "14330-190",
        description: "FLUSH CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "14330-230",
        description: "ORBITAL FLUSH VALVE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "143D6354G2",
        description: "THRUST MODE SELECT PANEL",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "14400-316",
        description: "RING ASSY, FLUSH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "14400-323",
        description: "ELBOW ASSEMBLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "14400-323-1",
        description: "ELBOW ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "14400-323-1",
        description: "ELBOW ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "144-183-000-021",
        description: "SENSOR-VIBRATION BEARING NO.1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "146A6110-28",
        description: "DOOR ASSY-AFT CARGO",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "148A7170-3",
        description: "ACCESS DOOR ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1498M46P01",
        description: "RING-RETAINER HPT REAR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "14R02-8C",
        description: "RING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "14R02-8C",
        description: "RING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "152305-1",
        description: "ACTUATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "152305-1",
        description: "ACTUATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1523M37P02",
        description: "SHIELD-BOLT HPT NOZ SPRT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1523M71G07",
        description: "SHIELD-HEAT HPT STATOR FWD",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1544100-7",
        description: "FLAPERON POWER CONTROL UNIT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1544100-7",
        description: "FLAPERON POWER CONTROL UNIT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1544300-3",
        description: "PCU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1552-002-19",
        description: "PRESSURE REGULATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1559A9900-01",
        description: "HP MANIFOLD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1567A0000-01",
        description: "SELECTOR VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-019-1",
        description: "VACUUM TOILET ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-019-2",
        description: "TOILET ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-029-3",
        description: "TOILET ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-029-4",
        description: "TOILET ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-176",
        description: "ELBOW, BOWL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-202",
        description: "HOUSING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-203",
        description: "END CAP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-206",
        description: "HANDLE-PUSH PULL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-206",
        description: "HANDLE-PUSH PULL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-206",
        description: "HANDLE-PUSH PULL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-217",
        description: "PLATE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-331",
        description: "Flush Ring",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-352",
        description: "BRACKET, HOUSING SUPPORT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-352",
        description: "BRACKET, HOUSING SUPPORT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-359-4",
        description: "SPRING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15800-359-7",
        description: "SPRING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15801-040",
        description: "FLUSH CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "15801-202",
        description: "HOUSING, ASSEMBLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "158300-101",
        description: "ACTUATOR-AILERON AUT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "160550-1",
        description: "OIL TEMP. CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "161A1100-14",
        description: "RH Main Landing Gear",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "161A1100-19",
        description: "LH Main Landing Gear",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "161T1145-4",
        description: "BOGIE PIVOT PIN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "161T1145-4",
        description: "BOGIE PIVOT PIN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "161T2032-1",
        description: "LOCK SPINDLE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "161T6021-1",
        description: "UPPER DRAG STRUT NUT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162700-100",
        description: "Elevator Fuel Computer",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162700-100",
        description: "Elevator Fuel Computer",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162A1100-5",
        description: "NOSE LANDING GEAR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162A1100-5",
        description: "NOSE LANDING GEAR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162A1100-5",
        description: "NOSE LANDING GEAR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162A3105-1",
        description: "PUSHROD ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162BL902",
        description: "CABIN TEMP IND.",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162BL903",
        description: "INDICATOR-DUCTCABIN TEMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162BL903",
        description: "INDICATOR-DUCTCABIN TEMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162T1138-1",
        description: "CYLDR ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162T1408-3",
        description: "PIN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162T2007-1",
        description: "PIN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162T3027-1",
        description: "ARM ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162T3029-1",
        description: "CRANK ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162T5004-1",
        description: "PIN-NOSE LDG FWD SPRT BEAM",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162T5005-2",
        description: "PIN-NOSE LDG AFT SPRT BEAM",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "162T5006-1",
        description: "PIN-NOSE LDG GR SPRT LINK",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "165W01020",
        description: "PUMP, HYDRAULIC, MOTOR DRIVEN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "165W01020",
        description: "PUMP, HYDRAULIC, MOTOR DRIVEN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "165W01020",
        description: "PUMP, HYDRAULIC, MOTOR DRIVEN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "165W01020",
        description: "PUMP, HYDRAULIC, MOTOR DRIVEN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "165W01020",
        description: "PUMP, HYDRAULIC, MOTOR DRIVEN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "165W01020",
        description: "PUMP, HYDRAULIC, MOTOR DRIVEN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "165W01020",
        description: "PUMP, HYDRAULIC, MOTOR DRIVEN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "16800-01-00",
        description: "SEAT, 3RD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "169924",
        description: "CLAMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "169966",
        description: "CLAMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "171497-05-01",
        description: "FLIGHT MANAGEMENT COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "171497-05-01",
        description: "FLIGHT MANAGEMENT COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "171497-05-01",
        description: "FLIGHT MANAGEMENT COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "171497-05-01",
        description: "FLIGHT MANAGEMENT COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1721F4",
        description: "CONTINUOUS LEVEL SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "173A0103-8",
        description: "RUDDER ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1742F9",
        description: "LCM UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1742F9",
        description: "LCM UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1784M36G01",
        description: "SUPPORT-SHROUD NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "179366-1",
        description: "PLUG-MAGNETIC",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1808M56G01",
        description: "SEAL-STATIONARY HPT INR STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "181893-2",
        description: "INDICATOR, WATER SEPERATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "18-2141-3",
        description: "TRANSMITTER, HYDRAULIC PRESSURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "18-2141-3",
        description: "TRANSMITTER, HYDRAULIC PRESSURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "18-2141-3",
        description: "TRANSMITTER, HYDRAULIC PRESSURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "18-2141-3",
        description: "TRANSMITTER, HYDRAULIC PRESSURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "18-2141-3",
        description: "TRANSMITTER, HYDRAULIC PRESSURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "18-2141-3",
        description: "TRANSMITTER, HYDRAULIC PRESSURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1827T100-7",
        description: "ACTUATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "183010-4",
        description: "WATER SEPARATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "183010-4",
        description: "WATER SEPARATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "183010-4",
        description: "WATER SEPARATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1834M59G02",
        description: "ARM ASSY-VANE ACTUATION CPRSR STTR IGV",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "183A8100-5",
        description: "LH ELEVATOR TAB",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1-899-29",
        description: "PROXIMITY SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1-899-29",
        description: "PROXIMITY SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1-899-29",
        description: "PROXIMITY SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1-899-29",
        description: "PROXIMITY SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1905A0000-01",
        description: "SAFETY VALVE, LG",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "111907",
        description: "BALLAST",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "194274-4",
        description: "HEAT EXCHANGER(REHEATER)",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "194276-5",
        description: "CONDENSER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "194276-5",
        description: "CONDENSER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1B1000-1GS",
        description: "STATIC INVERTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1G390",
        description: "SWITCH ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "1U1065-2",
        description: "COMPENSATOR ASSY-CARTRIDGE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2002M15P01",
        description: "RETAINER-BLADE HPT RTR REAR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2010A04H04-24",
        description: "KEY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2013-1A",
        description: "BATTERY ASSEMBLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "20202-01",
        description: "FUEL COMPENSATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2022432-4",
        description: "ACTUATOR, RAM AIR DOOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2022494-2",
        description: "ACTUATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2022494-2",
        description: "ACTUATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2022494-2",
        description: "ACTUATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2022522-2",
        description: "ACTUATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2041220-0424",
        description: "CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2041220-0424",
        description: "CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2041220-0424",
        description: "CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2041223-0414",
        description: "WXR CONTROL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2041231-3622",
        description: "VORMARK. RECEIVER,RVA36A",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2041444-0404",
        description: "ANTENNA DRIVE UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2041444-0404",
        description: "ANTENNA DRIVE UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2041444-0404",
        description: "ANTENNA DRIVE UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2041446-0401",
        description: "PLANAR ARRAY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2041446-0401",
        description: "PLANAR ARRAY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2041446-0401",
        description: "PLANAR ARRAY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2041683-7507",
        description: "ADF ANTENNA",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2041683-7507",
        description: "ADF ANTENNA",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2045081-1",
        description: "STUD",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2056B0000-01",
        description: "PLENUM",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2056B0000-01",
        description: "PLENUM",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2056B0000-01",
        description: "PLENUM",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2056C0000-01",
        description: "CHAMBER-AIR PLENUM",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2061-15-1",
        description: "INDICATOR - FLAP POSITION",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2067631-5332",
        description: "ALTIMETER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2070499-0101",
        description: "INDICATOR, IND MOUNT TRAY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "20791-02AB",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "20791-02AB",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2080M35G04",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2080M35G04",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2080M35G04",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2080M35G04",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2080M35G04",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2080M35G04",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2080M35G04",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2080M35G04",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2080M35G04",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2080M35G04",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2080M35G04",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2080M35G04",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2080M35G04",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2086M14G02",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2086M14G02",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2086M14G02",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2086M14G02",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2086M14G02",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2086M14G02",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2086M14G02",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2086M14G02",
        description: "NOZZLE-HPT STATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2117388-6",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2118966-221",
        description: "APU ECU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2118966-222",
        description: "APU ECU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2118966-222",
        description: "APU ECU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "211C223-175",
        description: "SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "211C223-297",
        description: "SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "211C223-518",
        description: "PRESSURE SWITCH",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "211C223-527",
        description: "PRESSURE SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2123M56P01",
        description: "ELECTRONIC   CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2123M56P01",
        description: "ELECTRONIC   CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "212A1212-3",
        description: "DUCT ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "212A2621-7",
        description: "DUCT ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "212A2811-2",
        description: "DUCT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "212T3008-12",
        description: "FIRE BLANKET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "213A1201-15",
        description: "AC BAY DUCT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "213T1003-17",
        description: "TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "213T3111-2",
        description: "DUCT ASSY.",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "213T3111-2",
        description: "DUCT ASSY.",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "214C50-2",
        description: "CABIN ALTITUDE WARNING SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "214C50-2",
        description: "CABIN ALTITUDE WARNING SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "214C50-2",
        description: "CABIN ALTITUDE WARNING SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "214C50-2",
        description: "CABIN ALTITUDE WARNING SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "214T2477-3",
        description: "DUCT ASSY.",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21520-1",
        description: "RECIRCULATING FAN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21520-1",
        description: "RECIRCULATING FAN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21520-1",
        description: "RECIRCULATING FAN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21520-1",
        description: "RECIRCULATING FAN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21520-1",
        description: "RECIRCULATING FAN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21520-1",
        description: "RECIRCULATING FAN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21520-1",
        description: "RECIRCULATING FAN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21520-1",
        description: "RECIRCULATING FAN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21520-1",
        description: "RECIRCULATING FAN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21520-1",
        description: "RECIRCULATING FAN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21520-1",
        description: "RECIRCULATING FAN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21520-1",
        description: "RECIRCULATING FAN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21520-1",
        description: "RECIRCULATING FAN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21520-1",
        description: "RECIRCULATING FAN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2156-604A",
        description: "SMOKE DETECTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2156-756",
        description: "DETECTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-1740-1",
        description: "BRAKE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-1740-1",
        description: "BRAKE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-1740-1",
        description: "BRAKE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-1740-1",
        description: "BRAKE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-1740-1",
        description: "BRAKE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21C1-3-22",
        description: "PRESSURE SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "21SN04-23F",
        description: "SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2204018-1",
        description: "MOUNT BRACKET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2204074-1",
        description: "PLATE AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2204087-1",
        description: "ROD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2204088-1",
        description: "SEAL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2204088-1",
        description: "SEAL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2204088-1",
        description: "SEAL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2204118-3",
        description: "SHIM",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2206400-2",
        description: "AIR CYCLE MACHINE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2215627-2",
        description: "DIFFUSER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2215629-1",
        description: "PLENUM ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2215632-1",
        description: "PLENUM",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2215632-1",
        description: "PLENUM",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2215632-2",
        description: "PLENUM ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2227000-61C1",
        description: "DFDAU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2233000-816-1",
        description: "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2234320-01-01",
        description: "FDIMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "22715-000-02",
        description: "NLG DOOR ACTUATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2293B020000",
        description: "VALVE-CHECK",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2313M-347-4",
        description: "WINDSHEILD WIPER MOTOR CONVERTER LH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2313M-347-4",
        description: "WINDSHEILD WIPER MOTOR CONVERTER LH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233A3202-5",
        description: "FUEL CONTROL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233A3203-1",
        description: "ENGINE CONTROL MODULE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233A3204-1",
        description: "MODULE APU CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233A3204-1",
        description: "MODULE APU CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233A3204-1",
        description: "MODULE APU CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233A3206-2",
        description: "PANEL DISPLAY SELECT INSTR - P5-28",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233A3207-4",
        description: "MOD-DOOR WARNING ANNUNCIATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233N3201-11",
        description: "PANEL AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233N3201-11",
        description: "PANEL AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233T3239-8",
        description: "PANEL AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233T3242-1301",
        description: "EEC CONT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233T7210-6",
        description: "PANEL AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233T7210-6",
        description: "PANEL AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233W6201-5",
        description: "MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "233W6203-5",
        description: "MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "234-511-9059",
        description: "COUPLING CLP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "234-511-9059",
        description: "COUPLING CLP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "234-517-9005",
        description: "COUPLING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "234-517-9005",
        description: "COUPLING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "241-246-022-004",
        description: "MONITOR ENGINE VIBRATION",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "241-246-022-004",
        description: "MONITOR ENGINE VIBRATION",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "241-251-000-121",
        description: "UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "241-280-051-012",
        description: "CONDITIONER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "241-280-056-014",
        description: "AVM",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-418-05",
        description: "TRANSFORMER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-418-05",
        description: "TRANSFORMER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-418-05",
        description: "TRANSFORMER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-418-05",
        description: "TRANSFORMER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "24E507040G01",
        description: "HEATER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "251A1240-3",
        description: "POWER CONT.- SPOILER AILERON CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "251A1240-5",
        description: "ACTUATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "251A2420-5",
        description: "VALVE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "251A2420-7",
        description: "CONTROL VALVE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "251A2430-25",
        description: "TAB MECH ASSY-ELEVATORCONTROLS LH",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "251A2430-26",
        description: "TAB MECH ASSY-ELEVATORCONTROLS RH",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "251A4510-14",
        description: "ACTUATOR, STAB TRIM",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "251T0100-311",
        description: "SHAFT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "251T0100-323",
        description: "ROD ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "251T0100-323",
        description: "ROD ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "251T0100-323",
        description: "ROD ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "251T0100-323",
        description: "ROD ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "251T0100-353",
        description: "ROD ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "252CA01C1-02Y1",
        description: "CONTACTOR THREE POLE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "252T2171-1",
        description: "TRUNNION",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "252T2171-1",
        description: "TRUNNION",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "25498",
        description: "GUIDE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "256T3210-4",
        description: "ACTUATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "256T3210-4",
        description: "ACTUATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "256T3210-4",
        description: "ACTUATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "256T3250-4",
        description: "TRAILING EDGE FLAP ROTARY ACTUATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "256T3250-4",
        description: "TRAILING EDGE FLAP ROTARY ACTUATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "256T3250-4",
        description: "TRAILING EDGE FLAP ROTARY ACTUATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "26007",
        description: "POTENTIOMETER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2607825-2",
        description: "WHEEL ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2613128-1",
        description: "WHEEL HALF ASSEMBLY      OUTBOARD(SERVIC",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2615001-1",
        description: "WHEEL",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2615001-1",
        description: "WHEEL",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2624-82",
        description: "ELT ANTENNA",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2624-82",
        description: "ELT ANTENNA",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "263BC101-3",
        description: "BATTERY CHARGER 777",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "26600",
        description: "Guide",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "273A1401-2",
        description: "NLG LOCK MANIFOLD ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "273A3610-4",
        description: "DAMPER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "273A3610-4",
        description: "DAMPER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "273A3610-4",
        description: "DAMPER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-7462-3",
        description: "VALVE-AUTO BRAKE SHUTTLE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "27550-1",
        description: "OXYGEN SHUTOFF VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "27550-1",
        description: "OXYGEN SHUTOFF VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "27550-1",
        description: "OXYGEN SHUTOFF VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-7680-1",
        description: "FUSE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-7680-2",
        description: "HYDRAULIC FUSE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-7681-2",
        description: "HYDRAULIC FUSE, NLG EXTEND",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-7681-2",
        description: "HYDRAULIC FUSE, NLG EXTEND",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2780536-101",
        description: "VALVE HEAT CARGO",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2780536-101",
        description: "VALVE HEAT CARGO",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-7892-2",
        description: "CARGO DOOR SNUBBER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2790583-104",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-8020-1",
        description: "FUSE HYDRAULIC TR PRESS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-8020-1",
        description: "FUSE HYDRAULIC TR PRESS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-8020-27",
        description: "FUSE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-8020-28",
        description: "FUSE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-8020-5",
        description: "HYDRAULIC FUSE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-8020-5",
        description: "HYDRAULIC FUSE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2-8041-1",
        description: "HYDRAULIC FUSE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "282900-1013",
        description: "ACTUATOR ASSY RUDDER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "283200-1007",
        description: "POWER CONTROL ACTUATOR, OB AILERON",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "283200-1007",
        description: "POWER CONTROL ACTUATOR, OB AILERON",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "284A6809-28",
        description: "SPUD",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "284A6829-7",
        description: "SHROUD CLEAR COVER",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "284A6830-12",
        description: "SHROUD ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "284T0052-3",
        description: "RADOME 767",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "284T0052-3",
        description: "RADOME 767",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "284T0052-3",
        description: "RADOME 767",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "284T0736-8",
        description: "FEEDLINE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285A1200-2",
        description: "FSEU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285A1200-2",
        description: "FSEU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285A1300-1",
        description: "ENGINE ACCESSORY UNIT MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285A1300-1",
        description: "ENGINE ACCESSORY UNIT MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285A1600-6",
        description: "PSEU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285A1840-8",
        description: "MODULE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285N0028-21",
        description: "CARD-FIRE DETECTION",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285N0412-3",
        description: "HANDSET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285N0412-4",
        description: "HANDSET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0012-110",
        description: "UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0017-103",
        description: "MODULE POWER SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0017-103",
        description: "MODULE POWER SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0017-103",
        description: "MODULE POWER SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0017-103",
        description: "MODULE POWER SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0017-103",
        description: "MODULE POWER SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0017-104",
        description: "MODULE, POWER SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0022-36",
        description: "PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0022-36",
        description: "PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0032-15",
        description: "PC AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0034-28",
        description: "PRINTED CIRCUIT ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0259-19",
        description: "PCA",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0259-19",
        description: "PCA",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0458-11",
        description: "PC ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0852-1",
        description: "FDAS KEYPAD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0852-1",
        description: "FDAS KEYPAD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0855-1",
        description: "FLIGHT DECK DOOR ACCESS CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285T0855-5",
        description: "MODULE, FDAS CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285W0015-102",
        description: "GENERATOR CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285W0015-102",
        description: "GENERATOR CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285W0026-2",
        description: "PASSENGER ADDRESS MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285W0027-101",
        description: "ZONE MANAGEMENT UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285W0027-101",
        description: "ZONE MANAGEMENT UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285W0038-101",
        description: "UNIT, POWER SUPPLY, PREREGULATOR, 777-200",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "285W0114-2",
        description: "RTP",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "287A6115-5",
        description: "BRACKET ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "28823-7",
        description: "COMPRESSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "28B545-9",
        description: "GENERATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2920033-103",
        description: "VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "293W3172-3",
        description: "ACTUATOR ASSY-DLOCK",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "293W3922-3",
        description: "ACTUATOR ASSY, MLG DOOR UPLOCK",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "293W3922-3",
        description: "ACTUATOR ASSY, MLG DOOR UPLOCK",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "295W1701-1",
        description: "STEERING ACTUATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "295W1701-1",
        description: "STEERING ACTUATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2960035-101",
        description: "VALVE, MOT OPR, 2 WAY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2960036-101",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2980190000000",
        description: "FAUCET - WATER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "29840",
        description: "ADHESIVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2LA005308-05",
        description: "WING STROBE LIGHT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "2LA455010-00",
        description: "ANTI COLLISION LIGHT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3000-46-24",
        description: "SWITCH_CMM 21-43-01",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "30042-0000-0402",
        description: "FUEL LEVEL SENSING UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "30042-0000-0501",
        description: "CONTROL UNIT-LEVEL,SENSIN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "30100022-33",
        description: "EXTINGUISHER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "301-298-211-0",
        description: "REAR ROTATING LABYRINTH",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "30136-0106",
        description: "WATER TANK QTY.TRANSMITTER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "30136-0108",
        description: "XMTR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "301-475-207-6",
        description: "BAFFLE-OIL BRG 1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "301-544-407-0",
        description: "TUBE ASSY-OIL NO.2 BRG",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "30-1685-2",
        description: "ANTI COLLISION LIGHT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "30-1883-5",
        description: "FLOODLIGHT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "30230",
        description: "ANTISKID ACCU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "30-2506-3",
        description: "LIGHT AY STROBE ANTICOL BTM",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "30-2581-3",
        description: "HALOGEN LOGO LIGHT - POST M330-33-2001",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "30-2581-3",
        description: "HALOGEN LOGO LIGHT - POST M330-33-2001",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "304486-12",
        description: "ELECTRONIC CONTROL BOX",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "305-136-803-0",
        description: "SHAFT ASSY-RADIAL DRIVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "305RAA1",
        description: "AUTOTHROTTLE SERVOMOTOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3100013",
        description: "SENSORS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "31073-110",
        description: "AILERON SERVO CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "311A2090-1",
        description: "PIN FUSE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "311A2090-1",
        description: "PIN FUSE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "311A2090-1",
        description: "PIN FUSE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "311A2090-1",
        description: "PIN FUSE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "311A2091-1",
        description: "PIN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "311A2095-1",
        description: "END CAP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "311A2095-1",
        description: "END CAP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "311A2095-2",
        description: "CAP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "311A2095-4",
        description: "END CAP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "314-2200-11",
        description: "FAN COWL RH",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "314-2200-3",
        description: "FAN COWL LH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "315A1811-1",
        description: "NUT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "315A2800-2",
        description: "TR ACTUATOR ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "315A2801-5",
        description: "ACTUATOR ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3199680",
        description: "BRAKE TEMP MONITOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "320522-17",
        description: "VALVE OUTLINE,SOLENOID",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "320548-1",
        description: "VALVE, SOLENOID",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "320548-1",
        description: "VALVE, SOLENOID",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "320548-2",
        description: "SOLENOID VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "320-549-005-0",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "321200M02",
        description: "BRAKE SPEED TRANSDUCER UNIT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "321200M02",
        description: "BRAKE SPEED TRANSDUCER UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3213754-1",
        description: "VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3213754-1",
        description: "VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3213754-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3214552-5",
        description: "VALVE, PRESS REG. & SHUT OFF",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "321464-5-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "321464-5-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "321464-5-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3214862-1",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "32152",
        description: "RING RTNR",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "32152",
        description: "RING RTNR",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3215618-4",
        description: "VALVE-ANTI ICE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3217-200",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3218KGB01",
        description: "SENSOR-N2 SPEED",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "321942-1-1",
        description: "VALVE - 35 DEG FLOW CONTR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "322000",
        description: "TRANSDUCER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3236761-5",
        description: "HOUSING ASSEMBLY, BALLSCREW",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "325-027-303-0",
        description: "HARNESS, MW0315",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "325-027-303-0",
        description: "HARNESS, MW0315",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "325-045-301-0",
        description: "HARNESS",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3250-80",
        description: "BALLAST UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3250-80",
        description: "BALLAST UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3250-80",
        description: "BALLAST UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "327155-3",
        description: "ANTI ICE VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3283086-32",
        description: "LOCK, BRAKE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3289562-5",
        description: "VALVE, PRECOOLER CONTROL",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3289562-6",
        description: "PRECOOLER CONTROL VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3290888-2",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3291184-2",
        description: "VALVE-AIR TRANSIENT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3291238-2",
        description: "VALVE, SURGE CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3291238-2",
        description: "VALVE, SURGE CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3291238-2",
        description: "VALVE, SURGE CONTROL",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3291432-1",
        description: "VALVE, APU LOAD CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "330TS08Y",
        description: "FIRE   PANEL-ENGINE APU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "331-0006-01",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "335-108-701-0",
        description: "SLIDE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "335-192-203-0",
        description: "VANE, BOOSTER ASSEMBLY, STAGE 2",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "saus-53",
        description: "INDICATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "saus-53",
        description: "INDICATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "saus-53",
        description: "INDICATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "saus-53",
        description: "INDICATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "saus-53",
        description: "INDICATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "336-009-801-0",
        description: "SEAL-ROTATING OIL NO.4 BRG",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "337-542-9210",
        description: "FILTER ELEMENT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-002-219-0",
        description: "BLADE-STG2 (WIDE)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-002-319-0",
        description: "BLADE-STG3 (WIDE)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-002-419-0",
        description: "BLADE-STG4 (WIDE)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-002-543-0",
        description: "BLADE-STG5 (WIDE)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-003-106-0",
        description: "VANE ASSY-FAN BSTR STG 1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-003-306-0",
        description: "VANE ASSY-FAN BSTR STG3",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-003-404-0",
        description: "VANE, BOOSTER ASSEMBLY, STAGE 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-010-601-0",
        description: "SHAFT ASSY-FAN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-062-701-0",
        description: "TUBE-OIL NO.1 BRG SCAV",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-068-111-0",
        description: "PANEL ASSY-ACOUSTICAL AFT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-068-111-0",
        description: "PANEL ASSY-ACOUSTICAL AFT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-068-111-0",
        description: "PANEL ASSY-ACOUSTICAL AFT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-068-111-0",
        description: "PANEL ASSY-ACOUSTICAL AFT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-068-411-0",
        description: "PANEL ASSY-ACOUSTICAL AFT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-068-411-0",
        description: "PANEL ASSY-ACOUSTICAL AFT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-068-411-0",
        description: "PANEL ASSY-ACOUSTICAL AFT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-078-804-0",
        description: "PANEL ASSY-ACOUSTICAL FWD",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-078-804-0",
        description: "PANEL ASSY-ACOUSTICAL FWD",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-079-504-0",
        description: "PANEL ASSY-ACOUSTICAL FWD",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-079-504-0",
        description: "PANEL ASSY-ACOUSTICAL FWD",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-108-503-0",
        description: "BLADE-LPT STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-108-608-0",
        description: "NOZZLE-SEGMENT STG 1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-108-608-0",
        description: "NOZZLE-SEGMENT STG 1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-108-608-0",
        description: "NOZZLE-SEGMENT STG 1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-108-708-0",
        description: "NOZZLE-SEGMENT STG 1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-108-708-0",
        description: "NOZZLE-SEGMENT STG 1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-108-708-0",
        description: "NOZZLE-SEGMENT STG 1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-109-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-109-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-109-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-109-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-109-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-109-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-109-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-109-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-109-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-151-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-151-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-151-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-151-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-151-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-151-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-151-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-151-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-151-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-251-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-251-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-251-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-251-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-251-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-251-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-251-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-251-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-309-0",
        description: "VANE, LPT, STAGE 2 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-109-705-0",
        description: "VANE, LPT, STAGE 3 (5BP)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-103-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-110-203-0",
        description: "NOZZLE SEG-STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-111-502-0",
        description: "RING 1-ROTATING",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-111-701-0",
        description: "RING 3-ROTATING",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-112-707-0",
        description: "AIRSEAL, LPT OUTER STATIONARY, STAGE 2",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-116-102-0",
        description: "BLADE-LPT STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-116-103-0",
        description: "BLADE, LPT, STAGE 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-116-702-0",
        description: "SHIELD",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-121-602-0",
        description: "SEAL-SEG STG 4",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "338-121-701-0",
        description: "PLATE-RETAINING",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3399104-1",
        description: "PILOT VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3399104-1",
        description: "PILOT VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3399106-2",
        description: "REGULATOR VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "340-001-028-0",
        description: "BLADE, FAN, STAGE 1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "340-001-028-0",
        description: "BLADE, FAN, STAGE 1",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "340-001-028-0",
        description: "BLADE, FAN, STAGE 1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "340-001-028-0",
        description: "BLADE, FAN, STAGE 1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "340-001-028-0",
        description: "BLADE, FAN, STAGE 1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "340-002-602-0",
        description: "FAIRING, FAN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "340-058-303-0",
        description: "VANE, BOOSTER ASSEMBLY, STAGE 3",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "340565",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "34100005-1",
        description: "ENGINE FIRE EXTINGUISHING BOTTLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3415-131P",
        description: "RING, RETAINER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3415-181SP",
        description: "RINGS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3415-275SP",
        description: "RINGS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3415-406SP",
        description: "RINGS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "341E030000",
        description: "SOLENOID THERMOSTAT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "341E030000",
        description: "SOLENOID THERMOSTAT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "341E030000",
        description: "SOLENOID THERMOSTAT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "342B050000",
        description: "THERMOSTAT, CONTROL",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "34600049-1",
        description: "FIRE BOTTLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "35000-00-01",
        description: "CLOCK-DIGITAL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "35008-307",
        description: "MODULE OVERHEAT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3505582-65",
        description: "AIR TURBINE ENGINE STARTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3505582-65",
        description: "AIR TURBINE ENGINE STARTER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3505920-8",
        description: "ADU",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "35-0D5-1003",
        description: "LOUDSPEAKER-AMPLI.,COCKPI",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "350E053020909",
        description: "FLIGHT WARNING COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "35-0L0-1002-05",
        description: "ECAM CONTROL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "35-0L5-1005-08",
        description: "BCL-BATTERY CHARGE LIMITER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3510-0044-07",
        description: "COFFEE MAKER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3530000-1",
        description: "SENSOR-FUEL LEVEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "35EN24-4",
        description: "LIMIT SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3617331-1",
        description: "ADAPTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3617331-1",
        description: "ADAPTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3617406-1",
        description: "MAST DRAIN BRACKET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3617406-1",
        description: "MAST DRAIN BRACKET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3617560-1",
        description: "AFT OIL COOLER BRACKET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3617560-1",
        description: "AFT OIL COOLER BRACKET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3617560-1",
        description: "AFT OIL COOLER BRACKET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3617906-1",
        description: "RETAINER OIL TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "362-021-002",
        description: "INDICATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "113720",
        description: "FIRE DETECTION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "113720",
        description: "FIRE DETECTION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "372-079-002",
        description: "STABILIZER POSITION INDICATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "372-079-002",
        description: "STABILIZER POSITION INDICATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3800702-1",
        description: "AUXILIARY POWER UNIT 131-9(B)",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3810684-2",
        description: "VANE, INLET GUIDE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3810684-2",
        description: "VANE, INLET GUIDE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3810794-2",
        description: "GEAR SEGMENT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3810794-2",
        description: "GEAR SEGMENT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3810808-3",
        description: "IGV HOUSING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3810875-1",
        description: "COVER INL GD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3810875-1",
        description: "COVER INL GD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3810889-5",
        description: "UPPER INLET PLENUM",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3810900-4",
        description: "FAN EXIT DUCT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3810900-4",
        description: "FAN EXIT DUCT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3810905-1",
        description: "INLET DUCT ASSEMBLY-COMPOSITE, UPPER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3810929-3",
        description: "FAN INLET DUCT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "381800-1005",
        description: "ACTUATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822400-5",
        description: "COMPRESSOR ROTOR, DRIVEN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822400-5",
        description: "COMPRESSOR ROTOR, DRIVEN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822400-5",
        description: "COMPRESSOR ROTOR, DRIVEN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822400-5",
        description: "COMPRESSOR ROTOR, DRIVEN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822423-1",
        description: "COMPRESSOR BEARING NUT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822423-1",
        description: "COMPRESSOR BEARING NUT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822504-3",
        description: "SHAFT, TURBINE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822510-2",
        description: "SHAFT, MATCHED SET, COMPRESSOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822510-2",
        description: "SHAFT, MATCHED SET, COMPRESSOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822510-2",
        description: "SHAFT, MATCHED SET, COMPRESSOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822510-2",
        description: "SHAFT, MATCHED SET, COMPRESSOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822510-2",
        description: "SHAFT, MATCHED SET, COMPRESSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822510-2",
        description: "SHAFT, MATCHED SET, COMPRESSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822510-2",
        description: "SHAFT, MATCHED SET, COMPRESSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822529-4",
        description: "DRIVEN COMPRESSOR COUPLING SHAFT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3822666-2",
        description: "BEARING, BALL, DUPLEX (CERAMIC)",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3826282-2",
        description: "2ND STAGE DIFFUSER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3826928-2",
        description: "ROD END BEARING",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3826928-2",
        description: "ROD END BEARING",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3826928-2",
        description: "ROD END BEARING",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3826928-2",
        description: "ROD END BEARING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3826928-2",
        description: "ROD END BEARING",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3826994-2",
        description: "COVER, IGV",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827054-2",
        description: "DRIVEN COMPRESSOR DIFFUSER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827067-1",
        description: "LOAD COMPRESSOR HEAT SHIELD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827067-1",
        description: "LOAD COMPRESSOR HEAT SHIELD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827075-2",
        description: "WASHER SPR CPRSN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827075-2",
        description: "WASHER SPR CPRSN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827165-2",
        description: "CLEVIS ASSEMBLY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827165-2",
        description: "CLEVIS ASSEMBLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827165-2",
        description: "CLEVIS ASSEMBLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827203-1",
        description: "BOLT ENG CPRSR DIFF",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827203-1",
        description: "BOLT ENG CPRSR DIFF",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827265-8",
        description: "BEARING HOUSING",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827265-8",
        description: "BEARING HOUSING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827324-3",
        description: "SUPPORT, STATIONARY SEAL, AIR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827324-3",
        description: "SUPPORT, STATIONARY SEAL, AIR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827324-3",
        description: "SUPPORT, STATIONARY SEAL, AIR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827324-3",
        description: "SUPPORT, STATIONARY SEAL, AIR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827385-2",
        description: "COMPRESSOR BEARING RETAINER PLATE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827385-2",
        description: "COMPRESSOR BEARING RETAINER PLATE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827401-1",
        description: "DESWIRL, ENGINE COMPRESSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827401-1",
        description: "DESWIRL, ENGINE COMPRESSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827405-3",
        description: "ROD- ACTUATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827405-4",
        description: "ACTUATOR ROD",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827405-4",
        description: "ACTUATOR ROD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827405-4",
        description: "ACTUATOR ROD",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827405-4",
        description: "ACTUATOR ROD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3827426-3",
        description: "HOUSING, BEARING, DRIVEN COMPRESSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830187-3",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830416-1",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830416-1",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830416-1",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830416-1",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830416-1",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830416-1",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830416-1",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830416-1",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830416-1",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830416-1",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830416-1",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830416-1",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830416-1",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830416-1",
        description: "FUEL NOZZLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3830461-5",
        description: "SHROUD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3840170-2",
        description: "SHAFT, COUPLING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3840171-2",
        description: "SHAFT COUPLING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3840171-2",
        description: "SHAFT COUPLING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3840172-1",
        description: "AFT BEARING SHAFT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3840243-1",
        description: "ROLLER BEARING SPACER RING",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3840243-1",
        description: "ROLLER BEARING SPACER RING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3840243-1",
        description: "ROLLER BEARING SPACER RING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3840244-1",
        description: "TIESHAFT NUT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3840244-1",
        description: "TIESHAFT NUT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3840244-1",
        description: "TIESHAFT NUT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844018-1",
        description: "STATOR ASSY 3STG",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844573-2",
        description: "RING SPRT STTR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844575-2",
        description: "1ST STAGE SHROUD SEGMENT TURBINE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844579-2",
        description: "RING SHROUD SUPPORT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844579-2",
        description: "RING SHROUD SUPPORT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844582-1",
        description: "2ND STAGE STATOR SEAL WELDMENT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844587-4",
        description: "RING, CONTAINMENT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844587-4",
        description: "RING, CONTAINMENT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844587-4",
        description: "RING, CONTAINMENT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844595-2",
        description: "SEAL SHRD SEG",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844619-3",
        description: "INNER TRANSITION LINER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844619-3",
        description: "INNER TRANSITION LINER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844760-2",
        description: "1ST STAGE TURBINE NOZZLE SEGMENT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844760-2",
        description: "1ST STAGE TURBINE NOZZLE SEGMENT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844760-2",
        description: "1ST STAGE TURBINE NOZZLE SEGMENT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844760-2",
        description: "1ST STAGE TURBINE NOZZLE SEGMENT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844760-2",
        description: "1ST STAGE TURBINE NOZZLE SEGMENT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844760-2",
        description: "1ST STAGE TURBINE NOZZLE SEGMENT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844766-4",
        description: "COMBUSTOR CASE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844766-4",
        description: "COMBUSTOR CASE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844766-4",
        description: "COMBUSTOR CASE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844766-4",
        description: "COMBUSTOR CASE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844766-4",
        description: "COMBUSTOR CASE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844776-3",
        description: "2ND STAGE TURBINE STATOR BAFFLE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844861-3",
        description: "SIDE THERMAL INSULATION BLANKET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844861-3",
        description: "SIDE THERMAL INSULATION BLANKET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844861-4",
        description: "SIDE THERMAL INSULATION BLANKET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844861-4",
        description: "SIDE THERMAL INSULATION BLANKET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844861-7",
        description: "AFT SIDE THERMAL INSULATION BLANKET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844861-7",
        description: "AFT SIDE THERMAL INSULATION BLANKET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844861-9",
        description: "SIDE THERMAL INSULATION BLANKET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844861-9",
        description: "SIDE THERMAL INSULATION BLANKET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844861-9",
        description: "SIDE THERMAL INSULATION BLANKET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844864-1",
        description: "2ND STAGE STATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844907-1",
        description: "HOUSING ASSEMBLY, TURBINE BEARING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3844917-1",
        description: "RETAINER BEARING",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3850100-5",
        description: "HOUSING EDUCTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3850104-3",
        description: "CAP, EXHAUST",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3850104-4",
        description: "CAP, EXHAUST",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3861046-1",
        description: "GENERATOR GEARSHAFT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3861046-1",
        description: "GENERATOR GEARSHAFT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3861046-1",
        description: "GENERATOR GEARSHAFT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3861046-1",
        description: "GENERATOR GEARSHAFT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3861047-1",
        description: "HIGH SPEED PINION GEARSHAFT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3861047-1",
        description: "HIGH SPEED PINION GEARSHAFT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3861047-1",
        description: "HIGH SPEED PINION GEARSHAFT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3862218-1",
        description: "HOUSING ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3863150-1",
        description: "RETAINER BRG",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3863167-1",
        description: "LUBRICATING NOZZLE ASSY.",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3863167-1",
        description: "LUBRICATING NOZZLE ASSY.",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3863344-3",
        description: "OIL PICKUP TUBE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3863349-1",
        description: "ROLLER OIL FILL CAP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3863396-2",
        description: "LUBE MANIFOLD",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3863396-2",
        description: "LUBE MANIFOLD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3863397-1",
        description: "RETAINER BRG",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3863426-3",
        description: "GEARBOX MATCHED HOUSING ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3863541-2",
        description: "OIL PICKUP TUBE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3863541-2",
        description: "OIL PICKUP TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3868027-1",
        description: "SHAFT, QUILL",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3868027-1",
        description: "SHAFT, QUILL",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "387",
        description: "LAMP = 10 PKG",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870205-1",
        description: "GEARSHAFT CLUSTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870208-1",
        description: "IDLE GEAR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870208-1",
        description: "IDLE GEAR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870208-1",
        description: "IDLE GEAR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870213-7",
        description: "STARTER ADAPTER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870213-7",
        description: "STARTER ADAPTER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870245-1",
        description: "AFT MOUNT BRACKET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870245-1",
        description: "AFT MOUNT BRACKET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870245-1",
        description: "AFT MOUNT BRACKET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870245-1",
        description: "AFT MOUNT BRACKET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870246-1",
        description: "BRACKET GRND HDLG AFT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870246-1",
        description: "BRACKET GRND HDLG AFT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870248-1",
        description: "HOIST BRACKET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870248-1",
        description: "HOIST BRACKET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870248-1",
        description: "HOIST BRACKET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3870248-1",
        description: "HOIST BRACKET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3876132-12",
        description: "LEAD, ELECTRICAL IGNITER PLUG",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3876225-2",
        description: "SENSOR, INLET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3880971-1",
        description: "FITTING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881684-2",
        description: "TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881684-2",
        description: "TUBE",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881685-2",
        description: "TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881685-2",
        description: "TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881708-3",
        description: "TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881708-3",
        description: "TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881763-1",
        description: "OIL COOLER RETURN TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881764-1",
        description: "OIL COOLER SUPPLY TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881764-1",
        description: "OIL COOLER SUPPLY TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881826-2",
        description: "SCAVENGE TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881826-2",
        description: "SCAVENGE TUBE ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881826-2",
        description: "SCAVENGE TUBE ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881827-1",
        description: "TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881827-1",
        description: "TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881828-1",
        description: "TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881828-1",
        description: "TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881836-1",
        description: "TURBINE BEARING SUPPLY TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881836-1",
        description: "TURBINE BEARING SUPPLY TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3881836-1",
        description: "TURBINE BEARING SUPPLY TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883830-1",
        description: "FLOW DIVIDER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883837-1",
        description: "MANIFOLD, FUEL, SECONDARY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883837-1",
        description: "MANIFOLD, FUEL, SECONDARY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883846-2",
        description: "TUBE, APU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883848-3",
        description: "TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883895-1",
        description: "TUBE- IGV RETURN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883895-1",
        description: "TUBE- IGV RETURN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883897-1",
        description: "TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883920-1",
        description: "TUBE- MANIFOLD SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883920-1",
        description: "TUBE- MANIFOLD SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883952-1",
        description: "TUBE ASSEMBLY, SCV-IGV SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883952-1",
        description: "TUBE ASSEMBLY, SCV-IGV SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883952-1",
        description: "TUBE ASSEMBLY, SCV-IGV SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883953-1",
        description: "TUBE ASSEMBLY, SCV-IGV RETURN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883953-1",
        description: "TUBE ASSEMBLY, SCV-IGV RETURN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883953-1",
        description: "TUBE ASSEMBLY, SCV-IGV RETURN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883954-1",
        description: "FUEL SUPPLY TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883954-1",
        description: "FUEL SUPPLY TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883954-2",
        description: "TUBE ASSY, METAL - FUEL SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883957-1",
        description: "FCU DRAIN TUBE ASSY.",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883957-1",
        description: "FCU DRAIN TUBE ASSY.",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883958-1",
        description: "IGVA DRAIN TUBE ASSY.",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883959-1",
        description: "LOAD COMPRESSOR DRAIN TUBE ASSY.",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883959-1",
        description: "LOAD COMPRESSOR DRAIN TUBE ASSY.",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3883959-1",
        description: "LOAD COMPRESSOR DRAIN TUBE ASSY.",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3884971-1",
        description: "TOTAL PRESSURE PROBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3884971-1",
        description: "TOTAL PRESSURE PROBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3884971-1",
        description: "TOTAL PRESSURE PROBE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3884980-3",
        description: "TUBE- P STATIC",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3884980-3",
        description: "TUBE- P STATIC",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3884983-3",
        description: "TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3884984-3",
        description: "TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3884984-3",
        description: "TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3884988-1",
        description: "DUCT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3884988-1",
        description: "DUCT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3885003-2",
        description: "DUCT-SURGE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3885007-1",
        description: "COMPRESSOR DISCHARGE DUCT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3885007-2",
        description: "COMPRESSOR DISCHARGE DUCT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3885007-2",
        description: "COMPRESSOR DISCHARGE DUCT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3885007-2",
        description: "COMPRESSOR DISCHARGE DUCT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3885007-2",
        description: "COMPRESSOR DISCHARGE DUCT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3885010-1",
        description: "GEARBOX VENT TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3885010-1",
        description: "GEARBOX VENT TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3885010-1",
        description: "GEARBOX VENT TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3885011-1",
        description: "TOTAL PRESSURE TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3885012-1",
        description: "STATIC PRESSURE TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3885012-1",
        description: "STATIC PRESSURE TUBE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3886188-3",
        description: "IGV ACTUATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3886188-3",
        description: "IGV ACTUATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3886188-3",
        description: "IGV ACTUATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3886188-3",
        description: "IGV ACTUATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3886188-3",
        description: "IGV ACTUATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3888394-221204",
        description: "ELECTRONIC CONTROL BOX",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3888394-221204",
        description: "ELECTRONIC CONTROL BOX",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3888394-221204",
        description: "ELECTRONIC CONTROL BOX",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3888448-1",
        description: "HARNESS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3888449-1",
        description: "WIRING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3888449-2",
        description: "WIRING HARNESS APU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "38E93-5",
        description: "ANTI ICING VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3910032-104",
        description: "VALVE AY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "392678-3-1",
        description: "VALVE, TURBOFAN CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3930007-105",
        description: "VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3945122506",
        description: "ELAC (Elevator Aileron Computer)",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3945122506",
        description: "ELAC (Elevator Aileron Computer)",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3945122506",
        description: "ELAC (Elevator Aileron Computer)",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3945128215",
        description: "ELAC-ELEVATOR AND AILERON COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3945128215",
        description: "ELAC-ELEVATOR AND AILERON COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3945128215",
        description: "ELAC-ELEVATOR AND AILERON COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3945128216",
        description: "ELEVATOR AILERON COM",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3945129100",
        description: "ELAC - ELEVATOR & AILERON COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3957985114",
        description: "ENGINE INTERFACE UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "3957985114",
        description: "ENGINE INTERFACE UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "396442-1",
        description: "FLOW CONTROL VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "397728-3-1",
        description: "VALVE, SO",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "40-0070-2",
        description: "LIGHT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "400-605",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "40340-10011",
        description: "VALVE AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4039892-904",
        description: "INDICATOR ALTIMETER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4039892-904",
        description: "INDICATOR ALTIMETER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4040800-911",
        description: "COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "saus-46",
        description: "777 APU STAND",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "40520-30019",
        description: "CYLINDER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4052500-927",
        description: "COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4055900-914",
        description: "SYMBOL GENERATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4063-19972-01AA",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4071400-904",
        description: "ADM",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4071400-904",
        description: "ADM",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4073770-902",
        description: "PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4073870-901",
        description: "AIMS DISPLAY SELECT PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4073870-901",
        description: "AIMS DISPLAY SELECT PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4073970-901",
        description: "DEVICE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4073970-951",
        description: "CONTROL DEVICE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4073970-951",
        description: "CONTROL DEVICE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "407EED1-1",
        description: "INDICATR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4081600-930",
        description: "ELECTRONIC DISPLAY UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4082499-902",
        description: "FLIGHT CONTROL COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4082499-903",
        description: "COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4082730-901",
        description: "EFIS CONTROL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4082730-901",
        description: "EFIS CONTROL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "40885",
        description: "VALVE CONTROL UNIT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "40885",
        description: "VALVE CONTROL UNIT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4091900-941",
        description: "B777 DIGITAL DISPLAY UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4100362-1",
        description: "MOTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4101002-11",
        description: "TRANSFER UNIT-HYD POWER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4101002-11",
        description: "TRANSFER UNIT-HYD POWER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4101002-9",
        description: "POWER TRANSFER UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4-1071-100",
        description: "CHIP DETECTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "413T1024-2",
        description: "LATCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "416-0001-9",
        description: "COFFEE MAKER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "416-00318-003",
        description: "WHC-WINDOW HEAT COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "416-1001-23",
        description: "COFFEE MAKER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "416A1401-22",
        description: "BRACKET ASSY - MEGAPHONE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "417A2508-9",
        description: "WATER TANK ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "417A2508-9",
        description: "WATER TANK ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "417T3052-147",
        description: "OUTBD PSU",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "417T3052-33",
        description: "PSU ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "417T3052-33",
        description: "PSU ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "417T3052-33",
        description: "PSU ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "417T3052-33",
        description: "PSU ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "417T3052-33",
        description: "PSU ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "417T3055-344B",
        description: "SPACER PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "417T3057-42",
        description: "PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4188-00",
        description: "STATIC INVERTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "419300-1003",
        description: "DUAL INPUT RUDDER PCU ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "41SG118-2",
        description: "XDCR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4205602",
        description: "PUMP-ELECTRIC MOTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4-273-03",
        description: "TRU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4-273-03",
        description: "TRU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4-273-03",
        description: "TRU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "42-935-2",
        description: "ANTISKID CONTROL UNIT - M0162",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4305990100",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4305990100",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4315542",
        description: "RETRACTABLE LANDING LIGHT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4321561",
        description: "LIGHT AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4345-003",
        description: "LAMP STUD",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "436-2",
        description: "DETECTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "44933",
        description: "IGN EXCITER (ALT: 10-621630-1)",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4500003K",
        description: "ELECTRONIC CONTROL BOX",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4500003L",
        description: "ELECTRONIC CONTROL B",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4500055",
        description: "Plate Assy",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4500074",
        description: "QUILL SHAFT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4500517",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "450-1-3100-00",
        description: "SWITCH-PRESSURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4501936",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4502123",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "450-2-3100-00",
        description: "SWITCH-PRESSURE",
        conditionCode: "NE",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "450-2-3100-00",
        description: "SWITCH-PRESSURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4502474",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4503344",
        description: "HOUSING ASSY, COMPRESSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4503366",
        description: "I.D. PLATE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "45-0351-1",
        description: "LIGHT LANDING LH RETRACT - LH",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "45-0351-4",
        description: "LIGHT LANDING RH RETRACT - RH",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "45-0351-5",
        description: "LIGHT ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4504071",
        description: "INLET GUIDE VANE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4504742",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4506052",
        description: "BRACKET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "466090",
        description: "FIRE EXT",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "47145-147",
        description: "THS ACTUATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "47215920BB00",
        description: "PROBE HEAT COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "47215920BB00",
        description: "PROBE HEAT COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "47215920BB00",
        description: "PROBE HEAT COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "473475-3",
        description: "BOTTLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "473597-5",
        description: "SMOKE DETECTOR TYPE II",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "473597-5",
        description: "SMOKE DETECTOR TYPE II",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "473597-5",
        description: "SMOKE DETECTOR TYPE II",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "473597-5",
        description: "SMOKE DETECTOR TYPE II",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "473597-5",
        description: "SMOKE DETECTOR TYPE II",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "473597-5",
        description: "SMOKE DETECTOR TYPE II",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "473597-5",
        description: "SMOKE DETECTOR TYPE II",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "473597-5",
        description: "SMOKE DETECTOR TYPE II",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "473955-1",
        description: "CARGO FIRE DETECTION MODULE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "476W2220-9N",
        description: "CRADLE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "476W2220-9N",
        description: "CRADLE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "488550-10-01",
        description: "ACTUATOR CONTROL ELECTRONICS UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "488550-10-01",
        description: "ACTUATOR CONTROL ELECTRONICS UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "49-170-11",
        description: "SLATFLAP CONTROL COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "49-177-12",
        description: "PRIMARY FLIGHT COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4950079",
        description: "CLAMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4950565",
        description: "CLAMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4950689-3",
        description: "SEGMENT-HEAT BLANKET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "4950689-4",
        description: "SEGMENT-HEAT BLANKET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5006284A",
        description: "HOUSING",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5006349",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5006349",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "503CA04F2-02Y00",
        description: "CONTACTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "510846-1",
        description: "STATOR ALTERNATOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5145-1-64",
        description: "AUDIO SELECTOR PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "521100",
        description: "GCU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5-211S614-80",
        description: "PACKING (Alt: 5-211E600-7 & 5-211)",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "522-0700-023",
        description: "GLIDE SLOPE ANTENNA",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "548376-6",
        description: "CABIN TEMPERATURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "548376-6",
        description: "CABIN TEMPERATURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "56090-24",
        description: "PIN, QUICK RELEASE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5653732",
        description: "VALVE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "568-1-29117-002",
        description: "PUMP, FUEL OVERRIDEJETTISON",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "56A621",
        description: "BLADE ASSY OF-LPC 1STG",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "56A621",
        description: "BLADE ASSY OF-LPC 1STG",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "56A621",
        description: "BLADE ASSY OF-LPC 1STG",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "56A621",
        description: "BLADE ASSY OF-LPC 1STG",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "56A621",
        description: "BLADE ASSY OF-LPC 1STG",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "57186-10",
        description: "HYDRAULIC PUMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "572756-1",
        description: "THERMAL OVERHEAT SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "572757-1",
        description: "THERMAL OVERHEAT SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5-89354-3149",
        description: "NO1 WINDOW LH",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5908704",
        description: "SPRING WAVE WASHER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5908953",
        description: "SCREEN DRAIN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5909614",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5910228",
        description: "RINGS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5938214-1",
        description: "SEGMENT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5956814-503N",
        description: "WHEEL ASSY-NOSE STEERING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5956814-503N",
        description: "WHEEL ASSY-NOSE STEERING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5956814-503N",
        description: "WHEEL ASSY-NOSE STEERING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5956814-503N",
        description: "WHEEL ASSY-NOSE STEERING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5956814-503N",
        description: "WHEEL ASSY-NOSE STEERING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "59600-5003",
        description: "HYD SOL VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "5965440-5501",
        description: "RESERVOIR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "600-154-1251",
        description: "RELAY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "600700-00-501",
        description: "HOT AIR TRIM VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "601343",
        description: "TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "601847",
        description: "PLUG-MAGNETIC",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "603223",
        description: "SLIP TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "60-3368-7M",
        description: "STROBE POWER SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "60-3368-9",
        description: "PWR SPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "60-4791-3",
        description: "POWER SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "605457-8",
        description: "FAN ASSEMBLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "606707-1",
        description: "EXHAUST FAN",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "607510-2",
        description: "TEMPERATURE CONTROL BOX",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "607510-2",
        description: "TEMPERATURE CONTROL BOX",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "607510-2",
        description: "TEMPERATURE CONTROL BOX",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "607510-2",
        description: "TEMPERATURE CONTROL BOX",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "607510-2",
        description: "TEMPERATURE CONTROL BOX",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "60-755100-5",
        description: "FUEL PUMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "60B40026-20",
        description: "AUTO TRANSFORMER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "60B40026-20",
        description: "AUTO TRANSFORMER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "6105",
        description: "FUSE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "617166-1",
        description: "AIR TEMP SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "617166-1",
        description: "AIR TEMP SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "617166-1",
        description: "AIR TEMP SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "62-0101-123",
        description: "RAIL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "62-0101-123",
        description: "RAIL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-4593-505",
        description: "UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-5001-109",
        description: "R.D.M.I. TYPE NO. RDMI-743",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-5001-504",
        description: "INDICATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-5045-202",
        description: "GENERATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-5048-104",
        description: "PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-5048-341",
        description: "PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-5132-130",
        description: "WEATHER RADAR TRANSCEIVER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-5136-201",
        description: "ANTENNA MOUNT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-5137-601",
        description: "WEATHER RADAR ANTENNA",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-5137-601",
        description: "WEATHER RADAR ANTENNA",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-5219-004",
        description: "ASSY-VHF COMM L & R",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-5220-020",
        description: "VORMARKER RECEIVER,700",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-5222-102",
        description: "A.D.F RECEIVER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-5222-102",
        description: "A.D.F RECEIVER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-6089-102",
        description: "ALERT PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-6089-102",
        description: "ALERT PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-6831-002",
        description: "PANEL VHF",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-6831-002",
        description: "PANEL VHF",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-6831-002",
        description: "PANEL VHF",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-6831-002",
        description: "PANEL VHF",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "622-7878-201",
        description: "AIR TRAFFIC CONTROL TRANSPONDER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "624014-1",
        description: "TEMPERATURE SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "624014-1",
        description: "TEMPERATURE SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "624014-1",
        description: "TEMPERATURE SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "624016-1",
        description: "DUCT AIR TEMP SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "624016-2",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "624018-1",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "624160",
        description: "COUPLING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "624173",
        description: "COUPLING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "624185",
        description: "TUBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "624229",
        description: "SPRING, COUPLING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "625878-1",
        description: "SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "625878-1",
        description: "SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "625928-2",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "625928-2",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "625928-3",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "625946-8",
        description: "CONTRLLR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "625946-8",
        description: "CONTRLLR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "625946-8",
        description: "CONTRLLR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "625946-8",
        description: "CONTRLLR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "641121-1",
        description: "DUCT ZONE OVERHEAT SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "641121-1",
        description: "DUCT ZONE OVERHEAT SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "641172-1",
        description: "SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "641172-1",
        description: "SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "641172-1",
        description: "SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "64141-580-1",
        description: "STANDBY BAROMETRIC ALTIMETER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "64141-580-1",
        description: "STANDBY BAROMETRIC ALTIMETER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "64300-100",
        description: "HEADSET AIRMAN 750",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "64300-100",
        description: "HEADSET AIRMAN 750",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "64300-100",
        description: "HEADSET AIRMAN 750",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "64300-200",
        description: "AIRMAN 750 HEADSET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "6430A",
        description: "VARIABLE POWER TRANSFORMER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "645405-2",
        description: "FAN-RECIRCULATION",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "64882-206-1",
        description: "PRESSURE INDICATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "64882-206-1",
        description: "PRESSURE INDICATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "649-781-775-0",
        description: "SCREW",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "649-781-775-0",
        description: "SCREW",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "650-784-038-0",
        description: "RING-SELF LOCKING",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "650-784-038-0",
        description: "RING-SELF LOCKING",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "6510",
        description: "AIRSPEED SWITCH",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-16323-34",
        description: "WINDSHIELD,  ASSY RH #3",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-17821-18",
        description: "ASSY, MODULAR PACKAGE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-17821-18",
        description: "ASSY, MODULAR PACKAGE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-17821-20",
        description: "PRESSURE MODULAR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-17821-20",
        description: "PRESSURE MODULAR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-17821-20",
        description: "PRESSURE MODULAR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-17821-20",
        description: "PRESSURE MODULAR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-44562-1",
        description: "BARREL ASSY.",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-44562-1",
        description: "BARREL ASSY.",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-44681-16",
        description: "VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-44741-8",
        description: "BLOCKING VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-44741-8",
        description: "BLOCKING VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-45166-25",
        description: "ROD ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-45792-6",
        description: "PANE",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-52810-64",
        description: "UNIT AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "65-52810-64",
        description: "UNIT AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "66950",
        description: "VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "66950",
        description: "VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "66950",
        description: "VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "66950",
        description: "VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "6730C010000",
        description: "VALVE-FAN AIR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "6732A010000",
        description: "VALVE FAN AIR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "6740B050000",
        description: "OVER PRESSURE VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "6752-311-20",
        description: "CIRCUIT BREAKER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "6752-311-50",
        description: "CIRCUIT BREAKER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "6752-311-50",
        description: "CIRCUIT BREAKER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "676-3291-002",
        description: "PLUG",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "6773E010000",
        description: "VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "6773E010000",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "6774E010000",
        description: "VALVE - BLEED AIR PRESSURE REG.",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "6774E010000",
        description: "VALVE - BLEED AIR PRESSURE REG.",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-17791-3",
        description: "ARM",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-37291-8",
        description: "ROD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-37317-300",
        description: "HYDRAULIC PUMP MODULE AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-37324-18",
        description: "CABIN AIR TEMP MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-37324-18",
        description: "CABIN AIR TEMP MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-37324-18",
        description: "CABIN AIR TEMP MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-37369-24",
        description: "MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-37369-24",
        description: "MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-37369-24",
        description: "MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-37369-24",
        description: "MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-37369-24",
        description: "MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-37369-24",
        description: "MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-37369-24",
        description: "MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-37369-300",
        description: "MOD-GROUND PROXIMITY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-55179-78",
        description: "LIGHT DIMMER UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-71002-12",
        description: "LEVER ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-73614-47",
        description: "MODULE, POWER MANAGEMENT CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-73614-47",
        description: "MODULE, POWER MANAGEMENT CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-73713-17",
        description: "NAV MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-73713-17",
        description: "NAV MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-76436-9",
        description: "MODULE,STAB TRIM FLT. DECK DOOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-78214-4",
        description: "AURAL WARNING MODULE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "69-78214-4",
        description: "AURAL WARNING MODULE ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "70507-2",
        description: "VALVE AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "70507-2",
        description: "VALVE AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "70507-3",
        description: "VALVE AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7121-19971-01AC",
        description: "CONTROLLER-CABIN PRESSURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7121-19971-01AC",
        description: "CONTROLLER-CABIN PRESSURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7123-19973-03AC",
        description: "CABIN PRESSURE SELECTOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7123-19973-03AC",
        description: "CABIN PRESSURE SELECTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "71234",
        description: "HYDRAULIC RESERVOIR HAND PUMP",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "716TS06Y",
        description: "NW.STRG.HANDWHEEL SMTR.UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "71784",
        description: "HYDRAULIC VALVE MODULE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "71998",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "71998",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "71998",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "71998",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "72071000",
        description: "OVEN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "72071000",
        description: "OVEN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "72GP39-4",
        description: "XMTR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7335",
        description: "LAMP",
        conditionCode: "NE",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "734-15610-03",
        description: "PDU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "737-0010-633",
        description: "737NG WINGLET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "737-0010-634",
        description: "737NG WINGLET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "737-8618-1",
        description: "LIGHTPLATE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "737-8618-1",
        description: "LIGHTPLATE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "740119H",
        description: "INTEGRATED DRIVE GENERATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "740119H",
        description: "INTEGRATED DRIVE GENERATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "740120C",
        description: "GCU-GENERATOR CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "740120C",
        description: "GCU-GENERATOR CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "740120C",
        description: "GCU-GENERATOR CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "740121A",
        description: "GROUND POWER CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "740121A",
        description: "GROUND POWER CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "74-20",
        description: "HALON EXTINGUISHER-FIRE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "74-20",
        description: "HALON EXTINGUISHER-FIRE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "74-20",
        description: "HALON EXTINGUISHER-FIRE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "743-0304-001",
        description: "REPRODUCER, TAPE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "745-3000-515",
        description: "INLET COWL",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "745-4000-503",
        description: "FAN COWL LH (ENGINE RH)",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "746923E",
        description: "ELEC GENE INTERFACE UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "746A0000-06",
        description: "VALVE-TRIM AIR PRESSURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "748A0000-08",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "751460",
        description: "ELEMENT-FILTER",
        conditionCode: "NE",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7517900-10012",
        description: "ACSS TCAS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7517900-10020",
        description: "RT-950 TCAS COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-920",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-921",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-921",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-921",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-921",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-921",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7519200-921",
        description: "CMU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7552355",
        description: "FILTER ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7552355",
        description: "FILTER ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7552355",
        description: "FILTER ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756426",
        description: "GEAR SHAFT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756427",
        description: "START MOTOR GEAR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756461-1",
        description: "COVER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756466",
        description: "OIL PUMP GEAR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756466",
        description: "OIL PUMP GEAR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756469",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756664",
        description: "RETAINER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756665",
        description: "COVER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756668",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756670",
        description: "SPACER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756671",
        description: "BEARING SUPPORT ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756678",
        description: "PUMP SCAVENGE OIL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756678",
        description: "PUMP SCAVENGE OIL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756681",
        description: "CAP-FILTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756687",
        description: "JET",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "756731",
        description: "SPRING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "757290",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "757291",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "757292",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "757293",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "757307",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "757333-2",
        description: "WASHER FLAT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "757366",
        description: "PLUG",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "759C0000-02",
        description: "CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "759D0000-02",
        description: "CONTROLLER-PACK",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "759D0000-02",
        description: "CONTROLLER-PACK",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "761574B",
        description: "INTEGRATED DRIVE GENERATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "761574B",
        description: "INTEGRATED DRIVE GENERATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "761951",
        description: "STARTER SHAFT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "762080-1",
        description: "SAFETY VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "762185F",
        description: "GENERATOR CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "762185H",
        description: "GENERATOR CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "762187F",
        description: "BUS POWER CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "762187F",
        description: "BUS POWER CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "762525",
        description: "SEAL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "763810-6",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "763810-6",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "763810-6",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "763810-6",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "763810-6",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "763810-6",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "763810-6",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "763810-6",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "763810-6",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "763810-6",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "763810-6",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "763810-6",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "763810-6",
        description: "CABIN PRESSURE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "763A0000-03",
        description: "TEMP. SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "766A0000-01",
        description: "SENSOR-TEMPERATURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "766A0000-01",
        description: "SENSOR-TEMPERATURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "77-109-12",
        description: "XMTR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "773856-15",
        description: "VALVE AY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "773A0000-01",
        description: "SENSOR-TEMPERATURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "775A0000-08",
        description: "CONTROLLER-ZONE TEMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "775D0000-01",
        description: "ZONE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "775D0000-01",
        description: "ZONE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "775D0000-01",
        description: "ZONE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "775D0000-01",
        description: "ZONE CONTROLLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "780B0000-01",
        description: "SENSOR UNIT, FLAPSLAT COMMAND",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "780B0000-01",
        description: "SENSOR UNIT, FLAPSLAT COMMAND",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "780B0000-01",
        description: "SENSOR UNIT, FLAPSLAT COMMAND",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "780B0000-01",
        description: "SENSOR UNIT, FLAPSLAT COMMAND",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "78169-02",
        description: "MOD ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "785-002-8",
        description: "BMC-BLEED MONITORING COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "785-002-8",
        description: "BMC-BLEED MONITORING COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "785002-9",
        description: "BLEED MONITORING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "785840-4",
        description: "BLEED MONITOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "78695-1",
        description: "SNUBBER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "78695-1",
        description: "SNUBBER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "786A0000-06",
        description: "CONT UNIT POWER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "786A0000-12",
        description: "POWER CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "7900064",
        description: "TOILET",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "790424-4",
        description: "VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "792-6140-001",
        description: "HF ANTENNA COUPLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "792A0000-07",
        description: "ACTUATOR-FLAP,NO.2",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "792A0000-07",
        description: "ACTUATOR-FLAP,NO.2",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "793322",
        description: "PROBE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "796-809-6A",
        description: "CADENSICON",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "796-815-01-02",
        description: "PRESELECTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8011612",
        description: "PACKING",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "801307-00",
        description: "OXYGEN CYLINDER (115 CU FT)",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "801A50-0005A",
        description: "C-SEAL",
        conditionCode: "NE",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "80-207-01",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "80-207-01",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8055515-4507",
        description: "PTA-45B DATA PRINTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "810200-3",
        description: "CTC",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "810208-7",
        description: "HEAT EXCHANGER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "810209-11",
        description: "AIR CYCLE MACHINE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "810221-2",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "810230-4",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "810505-3",
        description: "ACIPS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "810601-3",
        description: "VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "810A0000-04",
        description: "SERVOCONTROL-RUDDER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "810A0000-05",
        description: "RUDDER SERVO CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "810A0000-05",
        description: "RUDDER SERVO CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "810A0000-05",
        description: "RUDDER SERVO CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "810A0000-05",
        description: "RUDDER SERVO CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "813500-401",
        description: "ACTUATOR ASSY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "813500-401",
        description: "ACTUATOR ASSY",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "813500-409",
        description: "ACTUATOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "816420-3",
        description: "Engine Data Interface Unit",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8195-33",
        description: "SNUBBER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0006-104",
        description: "COMPUTER ASSY - AUTO PILOT FLIGHT DIRECTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0006-105",
        description: "AUTOPILOT FLIGHT DIRECTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0006-105",
        description: "AUTOPILOT FLIGHT DIRECTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0297-001",
        description: "RECEIVER VORMB",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0297-001",
        description: "RECEIVER VORMB",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0297-020",
        description: "RECEIVER, VORMB",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0299-001",
        description: "ADF RECEIVER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0329-001",
        description: "DISTANCE MEASURING EQUIPMENT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0329-001",
        description: "DISTANCE MEASURING EQUIPMENT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0329-001",
        description: "DISTANCE MEASURING EQUIPMENT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0330-001",
        description: "RECEIVER-TRANSMITTER, HF",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0334-020",
        description: "RADIO ALTIMETER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0336-001",
        description: "TRANSPONDER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0447-101",
        description: "KEYBOARD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0693-003",
        description: "TRANSCEIVER VHF",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0693-003",
        description: "TRANSCEIVER VHF",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0693-003",
        description: "TRANSCEIVER VHF",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0693-003",
        description: "TRANSCEIVER VHF",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0726-020",
        description: "VORMARKER RECEIVER,700A",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0726-120",
        description: "VOR RECEIVER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0990-003",
        description: "TRANSCEIVER, HF",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0990-003",
        description: "TRANSCEIVER, HF",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0990-003",
        description: "TRANSCEIVER, HF",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-0990-004",
        description: "HF TRANSCEIVER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-1047-002",
        description: "TRANSCEIVER VHF COM",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-1047-003",
        description: "TRANSCEIVER VHF COM",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-1047-030",
        description: "VHF-900 COMMUNICATIONS TRANSCEIVER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-1047-030",
        description: "VHF-900 COMMUNICATIONS TRANSCEIVER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-1152-002",
        description: "GLOBAL LANDING UNIT TYPE NO. GLU-920",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-1152-122",
        description: "GLU-920 GLOBAL LANDING UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-1152-122",
        description: "GLU-920 GLOBAL LANDING UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-1250-002",
        description: "TRANSCEIVER VHF COM",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-1293-321",
        description: "TCAS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-1338-002",
        description: "TRANSPONDER                                      ",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-1338-002",
        description: "TRANSPONDER                                      ",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-1338-021",
        description: "TRANSPONDER-ATC",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-1338-205",
        description: "ATC TRANSPONDER       737",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-1338-205",
        description: "ATC TRANSPONDER       737",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "822-2911-002",
        description: "TCAS II TRANSMITTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "83000-05602",
        description: "UNIT, WINDOW HEAT CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "83000-05602",
        description: "UNIT, WINDOW HEAT CONTROL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "83000-05604",
        description: "WINDOW HEAT CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8-344-02",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8-344-03",
        description: "SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "861CAB-0001",
        description: "ATTACK SENSOR",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8-678-03",
        description: "PSCU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "87232323V00",
        description: "SENSOR-DUCT TEMPERATURE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "87292325V04",
        description: "AVNCS EQPT VENT COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "87292325V06",
        description: "AVIONICS EQT VENTIL CPT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "87292325V06",
        description: "AVIONICS EQT VENTIL CPT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "87292325V06",
        description: "AVIONICS EQT VENTIL CPT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "87292325V07",
        description: "COMPUTER EQUIPMENT VENTILATION",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8-736-05",
        description: "POWER SUPPLY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "89-01-07000",
        description: "HANDSET-COCKPIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "89-01-07122",
        description: "HANDSET, CABIN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "89-01-07122",
        description: "HANDSET, CABIN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "89-01-07122",
        description: "HANDSET, CABIN",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8910-332",
        description: "FUEL RETURN VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8921082G5",
        description: "LAVATORY WATER HEATER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "899-156-612",
        description: "SENSOR, WASTE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "899-156-612",
        description: "SENSOR, WASTE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "899-156-612",
        description: "SENSOR, WASTE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8AS193",
        description: "SWITCH",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8DJ339WAG1",
        description: "IND",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8DJ339WAG1",
        description: "IND",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8ES005045-00",
        description: "PSU-POWER SUPPLY UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8ES005304-00",
        description: "POWER SUPPLY UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8ES005304-00",
        description: "POWER SUPPLY UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8ES005309-00",
        description: "SUPPLY UNIT-POWER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8ES455012-00",
        description: "POWER SUPPLY UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8TC19AAR1",
        description: "T3 SENSOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "8TJ167GHH1",
        description: "TRANSMITTER-FUEL FLOW",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "901950-02",
        description: "FIRE DETECTION CONTROL UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "902020",
        description: "FIRE DETECTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9024-15704-03",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9024-15704-2",
        description: "SAFETY VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9027-20010",
        description: "SELECTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9043110-16",
        description: "LEAD ASSY-IGNITION",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "924-09",
        description: "KIT, SPARES FLOW DIVIDER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "924D100-1",
        description: "ACTR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "925010-101",
        description: "DIU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "931D100-3",
        description: "PDU",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "937E202G2",
        description: "COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "940732",
        description: "STANDBY SYSTEM HYDRAULIC PUMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "941V100",
        description: "AIR SHUT OFF VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "94830-05",
        description: "BRACKET, FORWARD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "94830-05",
        description: "BRACKET, FORWARD",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9508175",
        description: "VENT FLOAT VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9508175",
        description: "VENT FLOAT VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9523M11G03",
        description: "RETAINER",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9523M12G01",
        description: "RETAINER-BLADE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9560158820",
        description: "WASHER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9560162060",
        description: "CLAMP",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9560163900",
        description: "RING",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9599-607-12352",
        description: "RADIO ALTIMITER ANTENNA",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9599-607-12352",
        description: "RADIO ALTIMITER ANTENNA",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9599-607-14942",
        description: "TRANSCEIVER-RADIO ALTI.",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "96153250-32",
        description: "DMC",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "96153250-32",
        description: "DMC",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9615325060",
        description: "DISPLAY MANAGEMENT COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9615325060",
        description: "DISPLAY MANAGEMENT COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9615325060",
        description: "DISPLAY MANAGEMENT COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9615325060",
        description: "DISPLAY MANAGEMENT COMPUTER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "963A0000-02",
        description: "VALVE-TRIM AIR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "964-0401-016",
        description: "DATALOADER                                        ",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "964-0401-016",
        description: "DATALOADER                                        ",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "964-0453-011",
        description: "HF ANTENNA COUPLER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0648-004",
        description: "GPWC",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0648-004",
        description: "GPWC",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0648-004",
        description: "GPWC",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-003-206-206",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-003-206-206",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-003-232-232",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-0976-020-218-218",
        description: "EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-1676-002",
        description: "MARK V EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-1676-002",
        description: "MARK V EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "965-1676-002",
        description: "MARK V EGPWS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "967-0212-002",
        description: "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "967-0212-002",
        description: "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "967-0212-002",
        description: "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "967-0212-002",
        description: "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "967-0212-002",
        description: "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "967-0212-002",
        description: "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "967-0212-002",
        description: "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "967-0212-002",
        description: "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "967-0212-002",
        description: "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "967-0212-002",
        description: "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "967-0212-002",
        description: "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "967-0212-002",
        description: "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "967-0212-002",
        description: "DIGITAL FLIGHT DATA ACQUISITION UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "969291-1",
        description: "SHAFT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9700-C1A-BF23A",
        description: "O2 BOTTLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9700-C1A-F23AN",
        description: "PORTABLE OXYGEN CYL.",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9700-G2A-BF10A",
        description: "PORTABLE OXYGEN BOTTLE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "971600",
        description: "POWER UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "972C10-2",
        description: "VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "980-4700-003",
        description: "FLIGHT DATA RECORDER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "980-4700-042",
        description: "SSFDR-SOLID STATE FLIGHT DATA RECORDER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "980-4700-042",
        description: "SSFDR-SOLID STATE FLIGHT DATA RECORDER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "980-4700-042",
        description: "SSFDR-SOLID STATE FLIGHT DATA RECORDER",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "980-6022-001",
        description: "COCKPIT VOICE RECORDER, SOLID STATE MEMORY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "980-6022-001",
        description: "COCKPIT VOICE RECORDER, SOLID STATE MEMORY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "980-6022-001",
        description: "COCKPIT VOICE RECORDER, SOLID STATE MEMORY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "980-6022-001",
        description: "COCKPIT VOICE RECORDER, SOLID STATE MEMORY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "980-6022-001",
        description: "COCKPIT VOICE RECORDER, SOLID STATE MEMORY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "980-9900-001",
        description: "AUDIO VIDEO REPRODUC UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "980-9900-001",
        description: "AUDIO VIDEO REPRODUC UNIT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9992M65G08",
        description: "SHROUD ASSY-CPRSR STTR STG 1",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "9A APU STAND",
        description: "APU Stand",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A1-18-1030",
        description: "LIGHT SHIELD",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A1-18-1030",
        description: "LIGHT SHIELD",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A1-18-1030",
        description: "LIGHT SHIELD",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A1-18-1030",
        description: "LIGHT SHIELD",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A12SA",
        description: "MEGAPHONE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A1650-191",
        description: "WATER HOSE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A25313002",
        description: "VALVE BRAKE SELECTOR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A25315-1",
        description: "VALVE-PARKING BRAKE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A25434006-3000",
        description: "BRAKE DUAL DISTRIBUTION VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A25434006-3000",
        description: "BRAKE DUAL DISTRIBUTION VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A25434006-3000",
        description: "BRAKE DUAL DISTRIBUTION VALVE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A25434006-3000",
        description: "BRAKE DUAL DISTRIBUTION VALVE",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A25461-104",
        description: "AUTO SELECTOR NOR BRK SYS",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A420-062894-01",
        description: "Solenoid",
        conditionCode: "NS",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "A800100-3",
        description: "FIRE EXTINGUISHER - LAVATORY",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "AC69576",
        description: "VALVE SOLENOID MAKE-UP AIR",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "ACP2788AB04",
        description: "ACP-AUDIO CONTROL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "ACP2788AB04",
        description: "ACP-AUDIO CONTROL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "ACP2788AB04",
        description: "ACP-AUDIO CONTROL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "ACP2788AB04",
        description: "ACP-AUDIO CONTROL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "ACP2788AB04",
        description: "ACP-AUDIO CONTROL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "ACP2788AB04",
        description: "ACP-AUDIO CONTROL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "ACP2788AB05",
        description: "AUDIOCONTROL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "ACP2788AF01",
        description: "AUDIO CONTROL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "ACP2788AF01",
        description: "AUDIO CONTROL PANEL",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "AN6289J4",
        description: "NUT",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "AN814-6DL",
        description: "PLUG",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "AR4714-11",
        description: "ELECTRIC DOOR STRIKE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "AR4714-11",
        description: "ELECTRIC DOOR STRIKE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "AR4714-11",
        description: "ELECTRIC DOOR STRIKE",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "AR4714-7",
        description: "DOOR STRIKE, ELECTRICALLY OPERATED",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "AR4714-7",
        description: "DOOR STRIKE, ELECTRICALLY OPERATED",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "002A0016-32",
        description: "Elevator and Tab Assy - RH",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "002A0016-31",
        description: "Elevator Assy - LH",
        conditionCode: "OH",
        quantity: 1,
        uoM: "EA"
      },
      {
        partNumber: "AR4714-7",
        description: "DOOR STRIKE, ELECTRICALLY OPERATED",
        conditionCode: "SV",
        quantity: 1,
        uoM: "EA"
      }
    ];
  }
  }
