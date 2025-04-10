import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmaUiComponent } from './dma-ui.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DmaUiComponent', () => {
    @Component({
        template: `<dma-ui />`,
        imports: [DmaUiComponent],
    })
    class TestComponent {}

    function setupTest() {
        TestBed.configureTestingModule({
            imports: [TestComponent],
        });

        const fixture = TestBed.createComponent(TestComponent);

        return {
            fixture: fixture,
        };
    }

    it('should render', () => {
        const { fixture } = setupTest();
        expect(fixture.debugElement.query(By.directive(DmaUiComponent)).nativeElement).toBeDefined();
    });
});
