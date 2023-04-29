import { LoggerService } from "../Logger/logger.service";
import { CalculatorWithLogService } from "./calculator-with-log.service";


describe('CalculatorWithLogService', () => {
  it('should add two numbers', () => {
    //let loggerService=new LoggerService();
    // const calculator = new CalculatorWithLogService(loggerService);

    let mockLoggerService=jasmine.createSpyObj('LoggerService',['log']);
    const calculator=new CalculatorWithLogService(mockLoggerService);
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    // let loggerService=new LoggerService();
    // const calculator = new CalculatorWithLogService(loggerService);

    let mockLoggerService=jasmine.createSpyObj('LoggerService',['log']);
    const calculator=new CalculatorWithLogService(mockLoggerService);
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
})