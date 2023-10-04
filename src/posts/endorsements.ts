'use strict';

import * as db from '../database';
import { PostObject } from '../types';


interface myPostObject extends PostObject{
    edited?: number;
    editedISO?: string;
}

