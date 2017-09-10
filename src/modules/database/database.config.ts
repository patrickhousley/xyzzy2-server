import { Component } from '@nestjs/common';
import { ConnectionOptions } from 'typeorm';

@Component()
export abstract class DatabaseConfig {
    abstract getConfiguration(): ConnectionOptions;
}