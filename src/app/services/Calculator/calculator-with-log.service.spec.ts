import { TestBed } from "@angular/core/testing";
import { CalculatorWithLogService } from "./calculator-with-log.service";
import { LoggerService } from "../Logger/logger.service";


describe('CalculatorWithLogService', () => {

  let loggerServiceSpy: jasmine.SpyObj<LoggerService>;
  let calculator: CalculatorWithLogService;

  beforeEach(() => {
    console.log('calling before each');
    const mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    
    TestBed.configureTestingModule({
      providers:[
        CalculatorWithLogService,
        {
          provide:LoggerService,
          useValue:mockLoggerService
        }
      ]
    })
    calculator = TestBed.inject(CalculatorWithLogService);
    loggerServiceSpy=TestBed.inject(
      LoggerService
    ) as jasmine.SpyObj<LoggerService>;
  })

  it('should add two numbers', () => {
    console.log('calling add');
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    console.log('calling subtract');
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });
})