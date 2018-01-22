import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'Rxjs';

@Component({
    selector: 'ng-for',
    templateUrl: './ng-for.html'
})
export class NgForComponent implements OnInit {

    contacts: Observable<any[]>;
    user = {
        skills: [
            { name: 'JS', selected: true, id: 12 },
            { name: 'CSS', selected: false, id: 2 },
        ]
    };
    form: any;

    constructor(private fb: FormBuilder) { }


    ngOnInit() {
        this.contacts = Observable.of([
            {
                'id': 1,
                'name': 'Laura',
                'email': 'lbutler0@latimes.com',
                'age': 47
            },
            {
                'id': 2,
                'name': 'Walter',
                'email': 'wkelley1@goodreads.com',
                'age': 37
            },
            {
                'id': 3,
                'name': 'Walter',
                'email': 'wgutierrez2@smugmug.com',
                'age': 49
            },
            {
                'id': 4,
                'name': 'Jesse',
                'email': 'jarnold3@com.com',
                'age': 47
            },
            {
                'id': 5,
                'name': 'Irene',
                'email': 'iduncan4@oakley.com',
                'age': 33
            }
        ]);

        this.form = this.fb.group({
            skills: this.buildSkills()
        });
    }

    trackById(index, contract) {
        // console.info(index, contract);
        return contract.id;
    }

    refresh() {
        this.contacts = Observable.of([
            {
                'id': 1,
                'name': 'Laura1',
                'email': 'lbutler0@latimes.com',
                'age': 47
            },
            {
                'id': 2,
                'name': 'Walter2',
                'email': 'wkelley1@goodreads.com',
                'age': 37
            },
            {
                'id': 3,
                'name': 'Walter3',
                'email': 'wgutierrez2@smugmug.com',
                'age': 49
            },
            {
                'id': 4,
                'name': 'Jesse4',
                'email': 'jarnold3@com.com',
                'age': 47
            },
            {
                'id': 5,
                'name': 'Irene5',
                'email': 'iduncan4@oakley.com',
                'age': 33
            }
        ]);
    }

    get skills(): FormArray {
        return this.form.get('skills') as FormArray;
    }

    buildSkills() {
        const _skill = this.user.skills.map(item => {
            return this.fb.control(item.selected);
        });
        return this.fb.array(_skill);
    }

    submit(value) {
        const f = Object.assign({}, value, {
            skills: value.skills.map((item, i) => {
                return {
                    id: this.user.skills[i].id,
                    selected: item
                };
            })
        });
        // console.log(f);
    }
}
