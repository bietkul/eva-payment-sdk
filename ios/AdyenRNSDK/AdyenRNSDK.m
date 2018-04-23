//
//  AdyenRNSDK.h
//  AdyenRNSDK
//
//  Created by Kuldeep Saxena on 04/23/18.
//  Copyright © 2018 Kuldeep Saxena. All rights reserved.
//

#import "ScannerSDKPlugin.h"

@implementation AdyenRNSDK {
    RCTResponseSenderBlock _successCallback;
    RCTResponseSenderBlock _failureCallback;
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}
@end
