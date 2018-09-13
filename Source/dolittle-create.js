#!/usr/bin/env node
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import args from 'args';

args
    .command('application', 'An application')
    .command('boundedcontext', 'A bounded context')
    .command('command', 'A command')
    
args.parse(process.argv);

if( !args.sub.length ) args.showHelp();